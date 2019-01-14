docker:
	docker run --rm -p 4000:4000 -v `pwd`:"/srv/jekyll" jekyll/jekyll:3.7.3 bash -c "bundle install; jekyll serve"