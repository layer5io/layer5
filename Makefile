setup:
	npm install

site:
	npm start
	
site-fast:
	gatsby develop

build:
	gatsby build && gatsby serve

clean: 
	gatsby clean; \
	make site