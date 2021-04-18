setup-libs:
	npm install --legacy-peer-deps

site:
	npm start

build:
	gatsby build && gatsby serve
