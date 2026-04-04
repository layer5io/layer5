# Copyright Layer5, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

include .github/build/Makefile.show-help.mk

## Install layer5.io dependencies your local machine.
setup:
	npm install --legacy-peer-deps

# "make site" - The default lightweight build keeps the dev server fast by skipping heavy collections.
## Run a lightweight dev server (core profile: excludes blog, events, integrations, members, news, resources).
site:
	@echo "🏗️  Starting dev server — core profile (fastest startup)"
	@echo "   Excluded: blog, events, integrations, members, news, resources"
	@echo "   → To include blog/news/events/resources: make site-content"
	@echo "   → To include all collections:            make site-full"
	@echo "   → See all profiles:                      make profiles"
	@npm run develop:lite

## Run a content dev server (content profile: includes blog, news, events, resources; skips members and integrations).
site-content:
	@echo "🏗️  Starting dev server — content profile"
	@echo "   Excluded: integrations, members"
	@echo "   → For the lightest build: make site"
	@echo "   → To include all collections: make site-full"
	@npm run develop:content

# "make site-full" forces the dev server to include every collection.
## Run a full dev server (all collections; slowest startup — includes members and integrations).
site-full:
	@echo "🏗️  Starting dev server — full profile (all collections)"
	@echo "   → For a faster dev server: make site"
	@npm run develop

## Run dev server directly via gatsby CLI, bypassing env-cmd (skips .env.development; Linux/macOS only).
site-fast:
	BUILD_FULL_SITE=false LITE_BUILD_PROFILE=core GATSBY_CPU_COUNT=4 SHARP_CONCURRENCY=4 UV_THREADPOOL_SIZE=4 NODE_OPTIONS=--max-old-space-size=8192 gatsby develop

## Build layer5.io for production.
build:
	npm run build

## Clear Gatsby build cache without rebuilding (use before switching profiles or after dependency changes).
cache-clean:
	npm run clean

## Clear Gatsby build cache and run a full production build (slow; use make cache-clean to skip the rebuild).
clean:
	npm run clean && make build

## Run Eslint on your local machine.
lint:
	npm run lint

## Kill process running the site.
kill:
	lsof -ti:8000 | xargs kill -9 2>/dev/null || true

## Prepare a list of features for the pricing page.
features:
	curl -L https://docs.google.com/spreadsheets/d/e/2PACX-1vQwzrUSKfuSRcpkp7sJTw1cSB63s4HCjYLJeGPWECsvqn222hjaaONQlN4X8auKvlaB0es3BqV5rQyz/pub\?gid\=1153419764\&single\=true\&output\=csv -o .github/build/spreadsheet.csv
	node .github/build/features-to-json.js .github/build/spreadsheet.csv src/sections/Pricing/feature_data.json
	rm .github/build/spreadsheet.csv

## List available build profiles and the collections each excludes.
profiles:
	@echo "Build profiles:"
	@echo ""
	@echo "  core    (make site)         — excludes: blog, events, integrations, members, news, resources"
	@echo "  content (make site-content) — excludes: integrations, members"
	@echo "  full    (make site-full)    — excludes: nothing (all collections included)"
	@echo "  none    (make site-custom)  — excludes: only what BUILD_COLLECTIONS_EXCLUDE specifies"
	@echo ""
	@echo "À la carte (comma-separated collection names to exclude):"
	@echo "  BUILD_COLLECTIONS_EXCLUDE=members,events make site-custom"

## Run dev server with only the collections you specify (set BUILD_COLLECTIONS_EXCLUDE to exclude by name).
site-custom:
	@echo "🏗️  Starting dev server — custom profile (none base + explicit exclusions)"
	@echo "   Excluded: $${BUILD_COLLECTIONS_EXCLUDE:-none}"
	@echo "   Example:  BUILD_COLLECTIONS_EXCLUDE=members,events make site-custom"
	@npm run develop:custom

## Analyze webpack bundle composition (opens browser with interactive bundle breakdown).
site-analyze:
	@echo "🏗️  Building site with webpack bundle analyzer..."
	ANALYZE_BUNDLE=true npm run build

.PHONY: setup build site site-content site-full site-fast site-custom cache-clean clean lint kill features profiles site-analyze
