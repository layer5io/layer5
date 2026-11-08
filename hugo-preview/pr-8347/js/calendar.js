// FullCalendar (global build) — pinned, lazy, fed by Hugo content/events (no Google Calendar dependency).
const FC = 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js';
const load = (src) => new Promise((ok, fail) => { const s = Object.assign(document.createElement('script'), { src, onload: ok, onerror: fail }); document.head.append(s); });
export async function init(els) {
  try { await load(FC); } catch { return; } // <noscript> fallback list stays in the DOM
  els.forEach((el) => {
    new window.FullCalendar.Calendar(el, {
      initialView: 'dayGridMonth', height: 'auto', events: JSON.parse(el.dataset.calendar),
      headerToolbar: { left: 'prev,next today', center: 'title', right: '' },
    }).render();
  });
}
