/*******************************
Collection is built here it connects with models 
one collection connects with many models.	
*********************************/

define([
	'backbone',
	'../models/product'
	
], function (
	Backbone,
	ProductModel
){

	var PicturesCollection = Backbone.Collection.extend({

		//connects with flickr api 
		rootApi: '../../mocks/products.js',

		model: ProductModel,

		//initialize function will set up AJAX call to Flickr API
		initialize: function(model, options){
			_.bindAll(this, "beforeSend", "completed")

			//set options
			this.options = options || {};

			$.ajaxSetup({
				beforeSend: this.beforeSend,
				complete: this.completed
			});
		},

		// //builds url for ajax call to api 
		// url: function(){
		// 	var url = this.rootApi; 

		// 	if(this.options && this.options.hasOwnProperty("filter")){
		// 		if(this.options.filter.tags){
		// 			url = [url, "tagmode=all", "tags="+this.options.filter.tags].join('&'); 
		// 		}
		// 	}

		// 	return url
		// },

		// //makes ajax request to Flickr api
		// sync: function (method, model, options){
		// 	return $.ajax(
		// 		_.extend({
		// 			dataType: "jsonp"
		// 			, url: this.url()
		// 			, processData: false
		// 		}, options)
		// 	);
		// }, 
		// //uses function in model to getfilename for collection 
		// retrieveFileName: function(filename){
			
		// 	return this.find(function(image){ return filename === image.getFileName() });
		// },

		// //functions set filter and getFIlter are responsible for setting and geting filter internally, they are used in url function
		// setFilter: function(filter){
			
		// 	return this.options.filter = filter;
		// },
		// // getFIlter function retrieves filter is available or sets it to empty object 
		// getFilter: function(){

		// 	return this.options.filter || {}
		// },

		//accesses the an array called items and will parse it to the model.
		parse: function(response) {
			debugger;
			return response.items;
		},

		beforeSend: function(){
			
			this.trigger("fetch:start");
		},

		completed: function(){
			
			this.trigger("fetch:end");
		},

	});

	return PicturesCollection;
});