# Front End Nanodegree Resume
## Project Details

1. In this resume project, data is stored in four javaScript objects according to the schema given below. As is often the case when leveraging an API, the objects follow the schema exactly. The names match those in the schema (note that object and property names are case-sensitive). All property values are of the data-type given for the property in the schema.
2. Using the javaScript objects, the code displays all of the resume data contained within these objects in the resume.
3. All of the HTML code needed to build the resume is stored in **js/helper.js** variables. The variable names indicate their function.  substrings in these variable string values such as **%data%** and **#** are replaced with the data from the javaScript objects, and are either appended or prepended to the formatted result of the resume in the appropriate location.


### Project Files:
The resume repository includes the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the google map.
* **js/resumeBuilder.js**: This file contains the javaScript objects and the code to formulate the data to be displayed one the index.html page.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**:  Readme file for the resume project.
* **images**:  Images directory to hold the images.

### js/helper.js
Within helper.js, there are a large collection of strings containing snippets of HTML. Within those snippets, are placeholder data in the form of `%data%` or `%contact%`.

Each string has a title that describes how it should be used. For instance, `HTMLworkStart` should be the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which is replaced with the location of one of the schools from the education object.

### Resume process:
The resume has four distinct sections: work, education, projects and a header with biographical information.

1. Four JavaScript objects are built, each one representing a different resume section. The objects created (include property names and the data types of their values) the schema below was followed. All properties included contain a value of the type specified unless the property is marked 'optional'.  Property names are case-sensitive. JavaScript objects are formatted using [jshint.com](http://jshint.com/).

  * `bio` contains:

            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string
                  github: string
                  twitter: string (optional)
                  location: string
            welcomeMessage: string (optional)
            skills: array of strings
            biopic: string url
            display: function taking no parameters

  * `education` contains:

            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string (works with a hyphen between them)
                 url: string (optional)
            onlineCourses: array of objects with
                 title: string
                 school: string
                 dates: string (works with a hyphen between them)
                 url: string
            display: function taking no parameters

  * `work` contains

            jobs: array of objects with
                 employer: string
                 title: string
                 location: string
                 dates: string (Can be 'in progress')
                 description: string
            display: function taking no parameters

  * `projects` contains:

            projects: array of objects with
                  title: string
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. Iterate through each javaScript object and append its information to index.html in the correct section.
  * First, using jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
  * Make use of the ids of the `<div>`s in index.html and the HTML snippets in helper.js as jQuery selectors for `selector.append()` and `selector.prepend()`
  * Make Use the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from the resume JSON objects.
3. The resume includes an interactive google map.
  * In resumeBuilder.js, append the googleMap string to `<div id=”mapDiv”>`.
  * In index.html, uncomment the Google script element: `<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>`
  * In helper.js, at the bottom of the file, uncomment code to initialize map and set fitBounds.
4. All of the code for adding elements to the resume is contained within functions.
5. As described in the javaScript object schema, each 'display' function is encapsulated within the javaScript object it displays in the resume. For instance, the 'display' function for appending 'work' experience data to the resume is encapsulated within the 'work' javaScript object. The 'display' function is encapsulated within the 'work' javaScript object definition in the same way other properties are defined there, or it can be encapsulated later in the file using dot notation. For example: `work.display =`
6. Additional information (City, State) shows up when you click on the pins in the map.
