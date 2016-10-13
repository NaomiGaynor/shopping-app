//define used to prevent the polluting of global namespace.
//first argument of define requires other modules.
// second argument is function that requires modules.

define([
	'jquery',
	'backbone',
	'./router'
], function (
	$,
	Backbone,
	Router
){
	'use strict';
	
	var DOMReady = function (){
		URL.routers = {
			//creating new router, which is defined in url/main.js 
			Router: new Router({
				//will append $el to .wrapper.canvas on index.html 
				$el: $('.wrapper.canvas'),
				//will append $bag to .wrapper.bag
				$bag: $('.wrapper.bag')
			})
		};
	};
	//DOMReady will be called by jquery on index load. 
	$(document).ready(DOMReady);

	//Start backbone history a necessary step for bookmarkable URL's will tell backbone that it should start monitoring backbone events 
	Backbone.history.start();
});