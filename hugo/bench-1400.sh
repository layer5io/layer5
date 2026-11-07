#!/bin/bash
cd /mnt/c/Users/acer/Downloads/layer5/hugo

# Ensure .bench/content exists
if [ ! -d ".bench/content" ]; then
  node scripts/bench.mjs
fi

echo "=== 1,403-PAGE BENCHMARK: WITH DOCSY THEME ==="
for i in 1 2 3; do
  echo "--- Run $i (With Docsy) ---"
  /usr/bin/time -v hugo --contentDir .bench/content --destination .bench/public --minify --gc 2>&1 | grep -E "Total in|Elapsed \(wall clock\)|Maximum resident set size"
done

echo ""
echo "=== 1,403-PAGE BENCHMARK: WITHOUT THEME ==="
cp hugo.yaml hugo.yaml.bak
sed -i '/module:/,$d' hugo.yaml

for i in 1 2 3; do
  echo "--- Run $i (Without Theme) ---"
  /usr/bin/time -v hugo --contentDir .bench/content --destination .bench/public --minify --gc 2>&1 | grep -E "Total in|Elapsed \(wall clock\)|Maximum resident set size"
done

mv hugo.yaml.bak hugo.yaml

