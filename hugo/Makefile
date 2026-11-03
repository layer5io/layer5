.PHONY: serve build index test bench verify-urls migrate-dry help
HUGO ?= hugo
SRC ?= ../src/collections

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

verify-urls:     ## fail if a live Gatsby URL would 404 (needs .bench/gatsby-sitemap.xml)
	$(HUGO) --minify --gc && node scripts/verify-urls.mjs --old .bench/gatsby-sitemap.xml --new public/sitemap.xml --redirects public/_redirects

migrate-dry:     ## dry-run the MDX converter against layer5 collections: make migrate-dry [SRC=../src/collections]
	node scripts/migrate-mdx.mjs --src $(SRC) --dest content --dry-run --report .bench/migration-report.json
