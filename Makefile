jekyll=bundle exec jekyll

site:
	$(jekyll) serve --drafts --incremental

# With Jekyll Manager interface
site-admin:
	ADMIN=on $(jekyll) serve --drafts --incremental

build:
	$(jekyll) build --drafts --incremental

setup:
	ADMIN=on bundle install

docker:
	docker run --name layer5 --rm -p 4000:4000 -v `pwd`:"/srv/jekyll" jekyll/jekyll:3.7.3 bash -c "bundle install; jekyll serve --drafts --incremental"
