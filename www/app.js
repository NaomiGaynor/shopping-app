/************************************
Config file for require.js paths load dependancies that define AMD modules. 
deps link to personal js scripts
*************************************/

require.config({
	baseUrl: 'www/',
	//defines paths to all libraries
	paths: {
		jquery: '../bower_components/jquery/dist/jquery.min',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
		text: '../bower_components/requirejs-text/text' 
	},
	//shim config for non AMD scipts
	shim: {
		backbone: {
			//deps are included to let requirejs know that whenever backbone is run 
			//it will first make sure that the dependancies are met.
			deps:['underscore', 'jquery']
			//makes global variable backbone available
			, exports: 'Backbone'
		}, 

		underscore: {
			//tells requirejs that underscore has a global variable _
			exports: '_'
		}
	},

	//links to contents.js
	deps: ['./contents']
});
