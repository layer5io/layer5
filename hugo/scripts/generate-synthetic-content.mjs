#!/usr/bin/env node
/**
 * Generates a synthetic site shaped like layer5.io (1,210 pages, 17 collections, tags, categories,
 * shortcodes) so `make bench` can measure build time and memory *before* real content is migrated.
 * Deterministic: same --pages always produces the same site.
 *
 *   node scripts/generate-synthetic-content.mjs --pages 1210 --out .bench/content
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Distribution mirrors the audit in the migration plan (blog ~200+, integrations ~300+, members ~200+, …).
export const SHAPE = {
  integrations: 310, blog: 220, members: 210, resources: 110, handbook: 70, sistent: 60, news: 50, events: 40,
  workshops: 30, programs: 25, 'service-mesh-books': 15, 'kanvas-labs': 15, 'use-cases': 15,
  careers: 10, landscape: 10, 'service-mesh-workshops': 10, learn: 10,
};
const WORDS = 'mesh service cluster kubernetes observability policy gateway traffic latency sidecar operator pattern deploy design workload identity registry catalog telemetry rollout canary ingress egress tenant platform control plane data proxy adapter model component relationship'.split(' ');
const CATS = ['Observability', 'Service Mesh', 'CI/CD', 'Networking', 'Messaging', 'Security', 'Storage', 'Runtime'];
const TAGS = ['meshery', 'kubernetes', 'service-mesh', 'gitops', 'observability', 'community', 'cncf', 'security', 'platform', 'wasm', 'ebpf', 'devrel'];

function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32); }
const pick = (r, a) => a[Math.floor(r() * a.length)];
const sentence = (r, n) => { const w = Array.from({ length: n }, () => pick(r, WORDS)); w[0] = w[0][0].toUpperCase() + w[0].slice(1); return w.join(' ') + '.'; };
const para = (r) => Array.from({ length: 4 }, () => sentence(r, 10 + Math.floor(r() * 10))).join(' ');

export function generate({ pages = 1210, out }) {
  const scale = pages / Object.values(SHAPE).reduce((a, b) => a + b, 0);
  let total = 0; const r = rng(5);
  for (const [section, n0] of Object.entries(SHAPE)) {
    const n = Math.max(1, Math.round(n0 * scale));
    const dir = path.join(out, section); fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, '_index.md'), `---\ntitle: ${section}\n${section === 'integrations' ? 'url: /cloud-native-management/meshery/integrations/\n' : ''}---\n`);
    for (let i = 0; i < n; i++) {
      const slug = `${section}-${String(i).padStart(4, '0')}`;
      const year = 2019 + Math.floor(r() * 8), month = 1 + Math.floor(r() * 12), day = 1 + Math.floor(r() * 28);
      const fm = [`title: "${sentence(r, 5).replace('.', '')}"`, `slug: ${slug}`, `date: ${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`, `summary: "${sentence(r, 14)}"`];
      if (section === 'blog') fm.push(`categories: [${pick(r, CATS)}]`, `tags: [${pick(r, TAGS)}, ${pick(r, TAGS)}]`, 'author: lee-calcote');
      if (section === 'integrations') fm.push(`category: "${pick(r, CATS)}"`, 'status: stable');
      if (section === 'members') fm.push('role: "Community member"', `weight: ${i + 10}`);
      if (r() < 0.1) fm.push(`aliases:\n  - /legacy/${slug}/`);
      const body = [
        para(r), `## ${sentence(r, 3).replace('.', '')}`, para(r), para(r),
        r() < 0.3 ? `{{< terminal >}}\nmesheryctl system start\n{{< /terminal >}}` : '',
        r() < 0.2 ? `{{< button url="/handbook/" text="Learn more" >}}` : '',
        `## ${sentence(r, 3).replace('.', '')}`, para(r), para(r),
      ].filter(Boolean).join('\n\n');
      fs.writeFileSync(path.join(dir, `${slug}.md`), `---\n${fm.join('\n')}\n---\n\n${body}\n`);
      total++;
    }
  }
  return total;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const a = process.argv.slice(2); const get = (f, d) => { const i = a.indexOf(f); return i < 0 ? d : a[i + 1]; };
  const out = get('--out', '.bench/content');
  fs.rmSync(out, { recursive: true, force: true });
  const n = generate({ pages: +get('--pages', 1210), out });
  console.log(`generated ${n} pages in ${Object.keys(SHAPE).length} collections → ${out}`);
}
