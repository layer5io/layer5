jekyll=bundle exec jekyll

site:
	$(jekyll) serve --drafts --livereload --config _config.yml,_config_dev.yml

# With Jekyll Manager interface
site-admin:
	ADMIN=on $(jekyll) serve --drafts --livereload --config _config.yml,_config_dev.yml

build:
	$(jekyll) build --drafts 

setup:
	ADMIN=on bundle install

docker:
	docker run --name layer5 --rm -p 4000:4000 -v `pwd`:"/srv/jekyll" jekyll/jekyll:4.0.0 bash -c "bundle install; jekyll serve --drafts --livereload --config _config.yml,_config_dev.yml"
