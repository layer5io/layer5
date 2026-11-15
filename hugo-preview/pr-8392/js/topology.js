// Cytoscape loader — pinned version from jsDelivr, loaded only on pages with {{< topology >}}.
const CY = 'https://cdn.jsdelivr.net/npm/cytoscape@3.30.2/dist/cytoscape.min.js';
const load = (src) => new Promise((ok, fail) => { const s = Object.assign(document.createElement('script'), { src, onload: ok, onerror: fail }); document.head.append(s); });
export async function init(els) {
  try { await load(CY); } catch { els.forEach((el) => (el.textContent = 'Diagram failed to load.')); return; }
  const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  els.forEach((el) => {
    const data = JSON.parse(el.dataset.cytoscapeGraph);
    window.cytoscape({
      container: el, elements: data.elements, layout: { name: data.layout || 'cose', animate: false, padding: 24 },
      userZoomingEnabled: false,
      style: [
        { selector: 'node', style: { 'background-color': css('--accent'), label: 'data(label)', color: css('--text'), 'font-size': 11, 'text-valign': 'bottom', 'text-margin-y': 6 } },
        { selector: 'edge', style: { width: 1.5, 'line-color': css('--muted'), 'curve-style': 'bezier', 'target-arrow-shape': 'triangle', 'target-arrow-color': css('--muted') } },
      ],
    });
  });
}
