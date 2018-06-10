# Jekyll Material Theme

A Jekyll Theme based on [Material Design](https://material.io/) using [Materialize](http://materializecss.com/).

![CircleCI](https://img.shields.io/circleci/project/github/jameshamann/jekyll-material-theme.svg?style=for-the-badge)
![Gem](https://img.shields.io/gem/dt/jekyll-material-theme.svg?style=for-the-badge) ![Gem](https://img.shields.io/gem/v/jekyll-material-theme.svg?style=for-the-badge)

## Examples

<a href="https://imgur.com/D9DSyuk"><img src="https://i.imgur.com/D9DSyuk.gif" title="source: imgur.com" /></a>


<a href="https://imgur.com/hlB1MOw"><img src="https://i.imgur.com/hlB1MOw.gif" title="source: imgur.com" /></a>

<a href="https://imgur.com/qjhId2x"><img src="https://imgur.com/qjhId2x.gif" title="source: imgur.com" /></a>
##### Cookie Policy

If you use cookies on your site, or choose to use Google Analytics, you're able to notify visitors with this prompt. The ```Thanks!``` dialog message can be customised in your ```_config.yml``` file.

<a href="https://imgur.com/O7sICnY"><img src="https://i.imgur.com/O7sICnY.gif" title="source: imgur.com" /></a>

##### Tools and Experience Section

If you'd like to display some of your skills and experience, you can do so through using the section below.

<a href="https://imgur.com/DjtrH6s"><img src="https://imgur.com/DjtrH6s.png" title="source: imgur.com" /></a>


### [Live Demo](https://jameshamann.com)

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-material-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-material-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-material-theme

## Usage

The ```_config.yml``` file has the following options.

Please ensure to copy this sample before serving up your site as some variables are required in order to make the site run correctly.

```yaml
title: Your awesome title
name: Your Name
email: your-email@example.com
description: Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.

theme: jekyll-material-theme

parallax_image_one: assets/images/startup3.jpg # These are the images used for the parallax background
parallax_image_two: assets/images/startup3.jpg

# Settings for the porfolio section

portfolio_heading: Portfolio
portfolio_type: cards #cards or carousel

project_one: "First Project"
project_one_description: Describe your project!
project_one_url: https://github.com/jameshamann/jekyll-material-theme
project_one_icon: location_on # these are from materiailize css, the full collection is here: http://materializecss.com/icons.html

project_two: Second Project
project_two_description: Describe your project!
project_two_url: https://github.com/jameshamann/jekyll-material-theme
project_two_icon: photo_camera


project_three: Third Project
project_three_description: Describe your project!
project_three_url: https://github.com/jameshamann/jekyll-material-theme
project_three_icon: hotel


project_four: Fourth Project
project_four_description: Describe your project!
project_four_url: https://github.com/jameshamann/jekyll-material-theme
project_four_icon: restaurant

# Skill icons from https://konpa.github.io/devicon/

skills:
  - name: amazonwebservices
  - name: android
  - name: angularjs
  - name: apache
  - name: appcelerator
  - name: apple
  - name: atom
  - name: babel
  - name: backbonejs
  - name: bitbucket
  - name: bootstrap
  - name: bower
  - name: c
  - name: chrome
  - name: codeigniter
  - name: coffescript
  - name: confluence
  - name: cplusplus
  - name: csharp
  - name: css3
  - name: cucumber
  - name: d3js
  - name: debian
  - name: devicon
  - name: django
  - name: docker
  - name: doctrine
  - name: dot-net
  - name: drupal
  - name: erlang
  - name: facebook
  - name: firefox
  - name: foundation
  - name: gatling
  - name: gimp
  - name: git
  - name: github
  - name: gitlab
  - name: go
  - name: google
  - name: gradle
  - name: grunt
  - name: gulp
  - name: heroku
  - name: html5
  - name: ie10
  - name: illustrator
  - name: inkscape
  - name: itellij
  - name: java
  - name: jasmine
  - name: javascript
  - name: laravel
  - name: less
  - name: linux
  - name: meteor
  - name: mocha
  - name: mongodb
  - name: moodle
  - name: mysql
  - name: nginx
  - name: nodejs
  - name: nodewebkit
  - name: oracle
  - name: photoshop
  - name: php
  - name: phpstorm
  - name: protractor
  - name: postgresql
  - name: python
  - name: pycharm
  - name: rails
  - name: react
  - name: redhat
  - name: redis
  - name: ruby
  - name: rubymine
  - name: safari
  - name: sass
  - name: sequelize
  - name: slack
  - name: sourcetree
  - name: ssh
  - name: swift
  - name: symfony
  - name: tomcat
  - name: travis
  - name: trello
  - name: twitter
  - name: typescript
  - name: ubuntu
  - name: vim
  - name: visualstudio
  - name: vuejs
  - name: webpack
  - name: webstorm
  - name: windows8
  - name: wordpress
  - name: yii
  - name: zend

icon_size: 50 # font-size of icons in px
colored: colored # Leave blank for black and white icons

project_button: Github

github: https://github.com/jameshamann/jekyll-material-theme
medium: https://medium.com

baseurl: # If your site is located at /blog or /home, change it here, otherwise leave it empty
url: http://localhost:4000/ # The URL of your site

# Google tracking, if both are filled, tag manager will prevail. Set up GA through GTM in that case
tag_manager_id: # This looks something like GTM-XXXXXXX
google_analytics_tracking_id: # This looks something like UA-000000000-0 Head over to https://analytics.google.com/ to setup.

cookie_accept_message: Thanks! # The pop-up dialog that appears after accepting the cookie notice.

syntax_highlighting: true # include the css for syntax highlighting

# Build settings
markdown: kramdown
permalink: pretty
plugins:
  - jekyll-feed
  - jekyll-assets
  - jekyll-minifier

```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/jameshamann/jekyll-material-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop and further customise this theme, fork the repo and explore the ```_assets``` directory, which includes all the ```css, js``` and ```font``` folders. If you're adding a feature, please add some tests in the ```spec``` directory to ensure everything works as intended.

## Contributors

- [James Hamann](https://github.com/jameshamann)
- [Jam Rizzer](https://github.com/jamrizzi)
- [Kobes](https://github.com/Kobes)

## [Changelog](https://github.com/jameshamann/jekyll-material-theme/blob/master/CHANGELOG.md)

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
