setup-libs:
	npm install

site:
	npm start

build:
	gatsby build && gatsby serve

outdated:
	npm outdated
	
update:
	npm update
