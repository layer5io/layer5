setup-libs:
	npm install

site:
	gatsby develop

build:
	gatsby build && gatsby serve

clean: 
	gatsby clean