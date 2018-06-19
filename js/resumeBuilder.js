/*
This file contains 4 objects that contain data for the Resume.  They
are bio, work, education and projects.
 */

var bio = {
	"name" : "Mitchell Smith",
	"age": 47,
	"skills": ["Python", "Object-oriented programming", "Java", "JavaScript", "SQL", "SS7"],
	"role" : "Web Developer",
	// "image" : "images/fry.jpg",
	"image" : "images/Mitchell_Career_Picture3.jpg",
	"message" : "Mitchell Smih Resume",
	"contacts" : {
		"mobile": "615-631-5614",
		"email" : "msp0079@gmail.com",
		"github" : "msmith7970",
		"twitter" : "@msmith79",
		"linkedin" : "Mitchell Smith",
		"location" : "Brentwood TN"
	}
}


var work = {
	"jobs": [
	  {
	  	"employer": "ATT Southeast",
	  	"title": "Senior Center Technical Support",
	  	"location": "Brentwood TN",
	  	"dates": "2016-present",
	  	"description": "Provide Tier 2 support of the SS7 Network for a 21 state area including STP and AIN nodes.",
	  	"url": "http://att.com"
	  },
	  {
	  	"employer": "ATT Southeast",
	  	"title": "Network Operations Supervisor",
	  	"location": "Brentwood TN",
	  	"dates": "2001-2016",
	  	"description": "Support of the SS7 Network on the Landline PSTN.  Supervised Electronic	Technicians who performed " +
	  	 			   "Surveillance and Analysis of the SS7 Network.  Responsible for individual measurements & ticket creation " +
	  	 			   "accuracy.  Performed schedule changes, reviewed training curriculum and ensured procedures were updated " +
	  	 			   "and maintained on the groups local website.",
	  	"url": "http://att.com"
	  },
	  {
	  	"employer": "BellSouth Telecommunicatons",
	  	"title": "Electronic Technician",
	  	"location": "Brentwood TN",
	  	"dates": "1994-2001",
	  	"description": "SS7 (Signaling System 7) Network Surveillance and Analysis on the PSTN (Public Service Telephone Network) " +
	  				   "SS7 network. Responsible for ensuring Network Reliability by responding to alarms in " +
	  				   "a timely manner by remote access and dispacting field technicians for onstie maintenance.",
	  	"url": "http://att.com"
	  },
	  {
	  	"employer": "NRC - Nichols Research Corporation",
	  	"title": "Systems Analyst",
	  	"location": "Huntsville AL",
	  	"dates": "1992-1994",
	  	"description": "Experience in utilizilng interceptor fly out data to generate engagement timelines and perform footprint coverage analysis." +
	  				   "  Responsible for developing and upgrading various defense scenario simulations utilizing structured FORTRAN.  Utilized " +
	  				   "these simulations to support systems analysis including operational trades and basing deployment studies for various system " +
	  				   "elements including Brilliant Eyes (BE), Ground Basesd Surveillance and Tracking Systems (GSTS) and Ground Based Radar (GBR) " +
	  				   "in support of several United States Army Space and Strategic Defense Commonad (USASSDC) projects."
	  },
	]
}


var education = {
	"schools": [
	  {
		"name": "Murray State University",
		"city": "Murray, KY",
		"degree": "BS",
		"major": "Electrical Engineering Technology",
		"date": 1992,
		"url": "https://www.murraystate.edu",
		"location": "Murray Ky"
	  }
	],

	"onlineCourses": [
	  {
		"name": "Udacity",
		"city": "Mountain View, CA",
		"degree": "Nanodegree Online",
		"title": "Full Stack Web Developer",
		"date": 2018,
		"url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
	  },
	  {
		"name": "Udacity",
		"city": "Mountain View, CA",
		"degree": "Nanodegree Online",
		"title": "Into to Programming",
		"date": 2017,
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	  }
	]
}


var projects = {
	"projects": [
	  {
	  	"title": "Movie Trailer Website",
		"dates": "2017",
		"description": "Built Movie Trailer website, that displays 6 favorite movies along with Tomatometer rating.",
		"images": "images/movies.jpg",
		"url": "http://ec2-52-15-211-126.us-east-2.compute.amazonaws.com/movie/"
	  },
	  {
		"title": "Neighborhood Map",
		"dates": "2017",
		"description": "Using Google Maps select and display User defined Points of Interest.",
		"images": "images/neighborhood_map.JPG",
		"url": "http://ec2-52-15-211-126.us-east-2.compute.amazonaws.com/map/"
	  },
	  {
	  	"title": "Online Shopping Catalog",
		"dates": "2017",
		"description": "Using Python and PostGREsql, built sample online shopping catalog.",
		"images": "images/onlinecatalog.jpg",
		"url": "http://ec2-52-15-211-126.us-east-2.compute.amazonaws.com/catalog/"
	  },
	  {
	  	"title": "Linux Server",
		"dates": "2017",
		"description": "Initialize and configured a linux server on Amazon AWS to host a Web Application.",
		"images": "images/serverimg.jpg",
		"url": "https://github.com/msmith7970/Catalog-App/tree/catalog_amazonaws"
	  },
	  {
	  	"title": "Resume",
		"dates": "2018",
		"description": "Built online Resume using HTML, CSS and Javascript",
		"images": "images/resume.jpg",
		"url": "http://ec2-52-15-211-126.us-east-2.compute.amazonaws.com/resume/"
	  },
	  {
	  	"title": "Blog",
		"dates": "2017",
		"description": "Built online Blog using HTML and backend databse",
		"images": "images/blog.jpg",
		"url": "https://theblog-170323.appspot.com/"
	  }
	]
}


var name = bio.name;
var role = bio.role;

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
// $("#header").append(HTMLcontactGeneric);
var mobile = bio.contacts.mobile;
var email = bio.contacts.email;
var github = bio.contacts.github;
// var linkedin = bio.contacts.linkedin;
var location_home = bio.contacts.location;

var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedGitHub = HTMLgithub.replace("%data%", github);
// var formattedLinkedin = HTMLlinkedin.replace("%data%", linkedin);
var formattedLocation = HTMLlocation.replace("%data%", location_home);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
// $("#topContacts").append(formattedLinkedin);
$("#topContacts").append(formattedLocation);


// Diplay the bio image
var bioImage = bio.image;
var formattedBioPic = HTMLbioPic.replace("%data%", bioImage);
$("#header").append(formattedBioPic);

// Display the list of skills in the header
$("#header").append(HTMLskillsStart);
bio.display = function() {
	bio.skills.forEach(function(skill) {
		var formattedSkill = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkill);
	});
}

bio.display();


// demonstrate using for loop
work.display = function () {
// function displayWork() {
	for (i=0; i < work.jobs.length; i++) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		formattedEmployer = formattedEmployer.replace("#", work.jobs[i].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

// Using dot notation, encapsulate the display function inside the work object.
work.display();

/*
  3/1/2018 - Mitchell's code for locationizer.  Adds all unique work locations into the array
  called locationArray.
*/

function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
return locationArray;
}


// Demostration of a function to internationalize a name.  That is to convert a name spelling to have
// the First name with Initial caps and the last name with all UKPPER caps.
function inName(name) {
	var strName = name.trim().split(" ");
	var firstName = strName[0];
	firstName = firstName.toLowerCase();
	var str = firstName.slice(0,1);
	str = str.toUpperCase();
	firstName = str + firstName.slice(1,firstName.length);

	var lastName = strName[1];
	lastName = lastName.toUpperCase();

	internationalName = firstName + " " + lastName;

	return internationalName;
}


// Display Method on the Projects object to display all projects
projects.display = function () {
	projects.projects.forEach(function(project) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		var formattedTitle = formattedTitle.replace("#", project.url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", project.images);
		$(".project-entry:last").append(formattedImage);

	})
}

projects.display();


// Display Method on the Education object to display Education History
education.display = function () {
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("#", school.url);
		formattedSchoolName = formattedSchoolName.replace("%data%", school.name);
		// $(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		// $(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchNameDegree = formattedSchoolName +' ' + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchNameDegree);

		var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.date);
		$(".education-entry:last").append(formattedSchoolDate);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
		$(".education-entry:last").append(formattedSchoolMajor);

	})
		$("#education").append(HTMLonlineClasses);
	// Display Online Courses
	education.onlineCourses.forEach(function(course) {

		var formattedOnlineTitle = HTMLonlineTitle.replace("#", course.url);
		formattedOnlineTitle = formattedOnlineTitle.replace("%data%", course.title);
		// $(".online-entry:last").append(formattedOnlineTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.name);
		// $(".online-entry:last").append(formattedOnlineSchool);

		var formattedOnlineTitleSchool = formattedOnlineTitle + " " + formattedOnlineSchool;
		$(".online-entry:last").append(formattedOnlineTitleSchool);

		var formattedOnlineDate = HTMLonlineDates.replace("%data%", course.date);
		$(".online-entry:last").append(formattedOnlineDate);

		// var formattedOnlineURL = HTMLonlineURL.replace("#", course.url);
		// formattedOnlineURL = formattedOnlineURL.replace("%data%", course.name);
		// $(".online-entry:last").append(formattedOnlineURL);
	})
}

education.display();


$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGitHub);
// $("#footerContacts").append(formattedLinkedin);
$("#footerContacts").append(formattedLocation);


// Show the Google Map
$("#mapDiv").append(googleMap);
