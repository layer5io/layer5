.PHONY: serve build index test bench url-inventory check-urls verify-urls migrate-dry help
HUGO ?= hugo
SRC ?= ../src/collections
# The live site is the Gatsby build deployed to this branch.
LIVE_REPO ?= https://github.com/layer5io/layer5.git
LIVE_BRANCH ?= gh-pages

help:            ## list targets
	@grep -E '^[a-z-]+:.*##' $(MAKEFILE_LIST) | sed 's/:.*##/\t/'

serve:           ## dev server with live reload (full site, no "lite" mode)
	$(HUGO) server --disableFastRender --navigateToChanged

build:           ## production build into ./public
	$(HUGO) --minify --gc

index: build     ## build + Pagefind search index
	npx -y pagefind --site public

test:            ## unit tests for the migration tooling (Node >= 18, no install needed)
	node --test "scripts/test/*.test.mjs"

bench:           ## 1,210-page synthetic build: wall time + peak RAM
	node scripts/bench.mjs

url-inventory:   ## list every live Gatsby URL into .bench/url-inventory.json (file list of gh-pages, no Gatsby build)
	rm -rf .bench/live && mkdir -p .bench
	git clone -q --depth 1 --filter=blob:none --no-checkout --single-branch -b $(LIVE_BRANCH) $(LIVE_REPO) .bench/live
	git -C .bench/live -c core.quotePath=false ls-tree -r --name-only HEAD > .bench/gatsby-files.txt
	for f in $$(git -C .bench/live ls-tree --name-only HEAD | grep -E '^sitemap-[0-9]+\.xml$$'); do git -C .bench/live show HEAD:$$f; done > .bench/gatsby-sitemap.xml
	node scripts/url-inventory.mjs --gatsby-files .bench/gatsby-files.txt --sitemap .bench/gatsby-sitemap.xml \
	  --redirects ../src/utils/redirects.yaml --collections ../src/collections --out .bench/url-inventory.json

check-urls:      ## compare ./public with the inventory, MISSING per collection (no build)
	@test -f .bench/url-inventory.json || $(MAKE) url-inventory
	node scripts/verify-urls.mjs --inventory .bench/url-inventory.json --public public --new public/sitemap.xml \
	  --allow scripts/verify-urls.allow --report .bench/verify-urls.json

verify-urls: build ## build, then fail if a live URL outside the allow-list would 404
	@$(MAKE) --no-print-directory check-urls

migrate-dry:     ## dry-run the MDX converter against layer5 collections: make migrate-dry [SRC=../src/collections]
	node scripts/migrate-mdx.mjs --src $(SRC) --dest content --dry-run --report .bench/migration-report.json
