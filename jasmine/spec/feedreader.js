/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	* a related set of tests. This suite is all about the RSS
	* feeds definitions, the allFeeds variable in our application.
	*/
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */

		/*
		*Regular expression from https://gist.github.com/dperini/729294
		*Author: Diego Perini
		*Version Date: 2018-09-12
		*/
		var urlTest = new RegExp(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i);

		var validUrls = true;

		//Check if allfeeds array is defined and populated
		it('are defined', function() {

			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);

		});


		/* TODO: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */

		it('has valid URL', function() {

			for(var i=0; i < allFeeds.length; i++){

				if(!urlTest.test(allFeeds[i].url)){
					validUrls = false;
				}

				expect(allFeeds[i].url).toBeDefined();
				expect(validUrls).toBe(true);
			}
		});

		/* TODO: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */
		it('has valid name', function() {

			for(var i=0; i < allFeeds.length; i++){
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name.length).not.toBe(0);
			}
		});

	});


	/* TODO: Write a new test suite named "The menu" */

	describe('Menu', function(){

		/* TODO: Write a test that ensures the menu element is
		 * hidden by default. You'll have to analyze the HTML and
		 * the CSS to determine how we're performing the
		 * hiding/showing of the menu element.
		 */

		it('is hidden by default', function(){
			expect(document.body.className).toBe('menu-hidden')
		});



	/* TODO: Write a test that ensures the menu changes
	  * visibility when the menu icon is clicked. This test
	  * should have two expectations: does the menu display when
	  * clicked and does it hide when clicked again.
	  */

	  	it('changes visibility', function() {
	 		menu = document.getElementsByClassName('menu-icon-link');
	 		menu[0].click();
	 		expect(document.body.className).toBe('');
	 		menu[0].click();
	 		expect(document.body.className).toBe('menu-hidden');
	 	});
	});

	/* TODO: Write a new test suite named "Initial Entries" */


}());
