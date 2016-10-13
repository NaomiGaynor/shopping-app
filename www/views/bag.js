/************************************
Bag View
************************************/

define([
	'backbone'
], function(Backbone) {
	'use strict';

	var BagView = Backbone.View.extend({

		viewOptions: ['bagState', 'basketCollection']
		
	});
	return BagView;
});