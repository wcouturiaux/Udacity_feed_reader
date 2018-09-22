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

		/* Test 'has valid URL' checks that a url is defined for each
		 * feed in allFeeds and if that url is valid per the regular
		 * expression urlTest
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

		/* Test 'has valid name' checks that a name is defined for each
		 * feed in allFeeds and that the length of the name is not 0 (empty).
		 */

		it('has valid name', function() {

			for(var i=0; i < allFeeds.length; i++){

				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name.length).not.toBe(0);

			}

		});

	});

	/* Test suite 'Menu' contains tests performed agains the site menu */

	describe('Menu', function(){

		/* Test 'is hidden by default' checks to see if the menu is
		 * hidden when the page is loaded.
		 */

		it('is hidden by default', function(){

			expect($('body').hasClass('menu-hidden')).toBe(true);

		});

		/* Test 'changes visibility' exeutes a click on the menu icon
		 * then checks that the class name has changed to ''. It then
		 * executes another click and tests the class name to be 'menu-hidden'
	  	*/

		it('changes visibility', function() {

			menu = document.getElementsByClassName('menu-icon-link');
			menu[0].click();
			expect(document.body.className).toBe('');
			menu[0].click();
			expect(document.body.className).toBe('menu-hidden');

		});

	});

	/* Test suite 'Initial Entries' contains test performed against feed entries */

	describe('Inital Entries', function() {

		/* Test 'should load at least 1 feed' checks that an entry has been made
		 * following the execution of loadFeed.
		 */

		beforeEach(function(done) {

			loadFeed(0,function() {

				done();

			});

		});

		it('Should load at least 1 feed', function(done) {

			expect($('div.feed').find('a.entry-link').length).not.toBe(0);
			done();

		});

	});

	/* Test suite 'New Feed Selection' performs tests against feed changes */

	describe('New Feed Selection', function() {

		/* Test 'New Feed Content Changes' checks that content changes when
		 * a new feed is loaded.
		 */

		var currentFeed;

		beforeEach(function(done) {


			loadFeed(0, function(){

				currentFeed = $('.feed').html();

				loadFeed(1,done);

			})

		});



		it('New Feed Content Changes', function(done) {

			expect(currentFeed).not.toBe($('.feed').html());
			done();

		});

	});

}());
