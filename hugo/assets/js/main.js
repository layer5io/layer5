/* layer5.io POC — one small file, no framework. Heavy widgets load only when a page has their hook. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const base = document.documentElement.dataset.base || '/';
  const html = document.documentElement;

  /* Theme toggle (initial theme is set by the inline <head> script) */
  const toggle = $('[data-theme-toggle]');
  const syncToggle = () => toggle && toggle.setAttribute('aria-pressed', String(html.dataset.theme === 'dark'));
  syncToggle();
  toggle?.addEventListener('click', () => {
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', html.dataset.theme); } catch (_) {}
    syncToggle();
  });

  /* {{< terminal >}} copy-to-clipboard */
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    const text = btn.closest('[data-terminal]')?.querySelector('code')?.innerText ?? '';
    try { await navigator.clipboard.writeText(text); btn.textContent = 'Copied'; }
    catch (_) { btn.textContent = 'Press Ctrl+C'; }
    setTimeout(() => (btn.textContent = 'Copy'), 1600);
  });

  /* Client-side filtering for integrations (replaces js-search for small catalogs) */
  $$('[data-filter-root]').forEach((root) => {
    const input = $('[data-filter-input]', root), chips = $$('[data-filter-chip]', root);
    const items = $$('[data-filter-item]', root), count = $('[data-filter-count]', root), empty = $('[data-filter-empty]', root);
    let cat = '';
    const apply = () => {
      const q = (input?.value || '').trim().toLowerCase();
      let n = 0;
      items.forEach((el) => {
        const ok = (!cat || el.dataset.category === cat) && (!q || el.dataset.name.includes(q));
        el.hidden = !ok; if (ok) n++;
      });
      if (count) count.textContent = n;
      if (empty) empty.hidden = n !== 0;
    };
    input?.addEventListener('input', apply);
    chips.forEach((c) => c.addEventListener('click', () => {
      cat = c.dataset.filterChip;
      chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
      apply();
    }));
  });

  /* Pagefind search dialog — index is produced after the Hugo build (`make index`) */
  const dlg = $('#search-dialog');
  let searchReady;
  const loadSearch = () => searchReady ||= new Promise((resolve) => {
    const css = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: `${base}pagefind/pagefind-ui.css` });
    const js = Object.assign(document.createElement('script'), { src: `${base}pagefind/pagefind-ui.js` });
    js.onload = () => { new window.PagefindUI({ element: '#search', showSubResults: true, showImages: false }); resolve(true); };
    js.onerror = () => { $('.search-missing', dlg).hidden = false; resolve(false); };
    document.head.append(css, js);
  });
  const openSearch = async () => { dlg?.showModal(); await loadSearch(); $('#search input')?.focus(); };
  $$('[data-search-open]').forEach((b) => b.addEventListener('click', openSearch));
  $('[data-search-close]')?.addEventListener('click', () => dlg.close());
  dlg?.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  document.addEventListener('keydown', (e) => {
    const typing = /input|textarea|select/i.test(document.activeElement?.tagName || '');
    if ((e.key === '/' && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) { e.preventDefault(); openSearch(); }
  });

  /* Newsletter / lead capture: HTML5 validation + fetch to the configured endpoint */
  $$('[data-newsletter]').forEach((form) => {
    const status = $('.form-status', form);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { status.textContent = 'Enter a valid email address.'; return; }
      const endpoint = form.dataset.endpoint;
      if (!endpoint) { status.textContent = 'Demo mode: no endpoint configured, nothing was sent.'; return; }
      status.textContent = 'Subscribing…';
      try {
        const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.email.value }) });
        status.textContent = res.ok ? 'Thanks! Check your inbox to confirm.' : 'Something went wrong. Try again in a minute.';
      } catch (_) { status.textContent = 'Network error. Try again in a minute.'; }
    });
  });

  /* Lazy widgets: loaded only when the hook exists, and only when visible */
  const lazy = (selector, loader) => {
    const els = $$(selector); if (!els.length) return;
    const io = new IntersectionObserver((entries, o) => {
      if (entries.some((x) => x.isIntersecting)) { o.disconnect(); loader(els); }
    }, { rootMargin: '200px' });
    els.forEach((el) => io.observe(el));
  };
  lazy('[data-cytoscape-graph]', async (els) => (await import(`${base}js/topology.js`)).init(els));
  lazy('[data-calendar]', async (els) => (await import(`${base}js/calendar.js`)).init(els));
})();
