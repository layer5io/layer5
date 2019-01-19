jekyll=bundle exec jekyll

site:
	$(jekyll) serve --drafts

# With Jekyll Manager interface
site-admin:
	ADMIN=on $(jekyll) serve --drafts

build:
	$(jekyll) build --drafts

setup:
	ADMIN=on bundle install

docker:
	docker run --rm -p 4000:4000 -v `pwd`:"/srv/jekyll" jekyll/jekyll:3.7.3 bash -c "bundle install; jekyll serve --drafts"
