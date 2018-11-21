# Programming test for Viaplay

# Framework
This web application has been mode using [Middleman](https://middlemanapp.com/basics/install/), [HAML](http://haml.info/), SCSS for styling and Javascript.

Test are in the form of basic Acceptance tests using **RSpec**.

Middleman was chosing because it is a light weight framework for building static web applications.

# Deployment
To see the web application see:
[Go to site](https://peaceful-mcnulty-a3154d.netlify.com/ "Viaplay")
Deployed with Netlify and GitHub

# Local version
To see the appliacation locally, clone the source code from the Git repository [Source code](https://github.com/Andycutter/viaplay_middle) 

In the terminal run `bundle install` to setup the application.

To get a local server running with the application run `middleman server` and visit `http://localhost:4567/` in your browser.

For a guide to install Middleman, see the official documentation [Middleman](https://middlemanapp.com/basics/install/)

# Tests
To see tests run `rspec` in your terminal from the root directory

# Code base / Git
To see the source code visit the Git repository [Source code](https://github.com/Andycutter/viaplay_middle "Source code").

`/source` contains the main website source files including Javascript and styling.

`/source/javascripts/api.js` contains the Javascript for fetching the data to display the series on the page.

`/source/javascripts/content.js` is responsible for fetching the data about each serie.

`const proxyURL = 'https://cors-anywhere.herokuapp.com/';` was used to solve problems with fetching and displaying the data from the API

`/layouts` contains the basic layout of the site. It uses **partials** located in `/partials` to render the **header** and **footer** of the site. The `= yield` renders the content of `index.html.haml` and other HAML-files in the `/source` directory

`/stylesheets` contain the styling for the site. For a better overview the styling is divided up into the partials `maincontent.css.scss` and `series.css.scss` and imported to `all.css.scss`

`/spec/` contain the testing framework. The "spec"-files contains the tests and `user_sees_content_on_landingpage` contains basic **User stories** for builing the application

# Notes and comments
Only the first serie "Grey's Anatomy" has a working info-page when clicking on the image. This is done just to illustrate the idea behind the application. In retrospective another framework should have been chosen (e.g. Ruby on Rails), to make it easier to show the information for each serie in a single view.

No navigation using arrowkeys was implemented. 