/*********************************
Module to build router 
Flickr API Service: http://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=?
*********************************/

define([
	'backbone',
	'./collections/products',
	'./collections/bag',
	'./views/products',
	'./views/productdetail',
	'../mocks/products'
], function (
	Backbone,
	ProductsCollection,
	BagCollection,
	ProductsView,
	ProductView,
	mocks
) {

		//defines custom router class
	var Router = Backbone.Router.extend({

		//specified routes for app 
		routes: {
			"": "renderGallery",
			"bag": "getBag"
		}, 

		initialize: function (options){

			//set $root to equal $el, passed in from contents.js module 
			this.$root = options.$el;
			this.$bag = options.$bag;

			// loads new collection class into collections object and calls function to extend collection 
			this.collection = new ProductsCollection(mocks); 
			this.bagCollection = new BagCollection();
			//loads new views class into views object and links view with collection and calls PituresView extend function  
			this.productsView = new ProductsView({ 
				collection: this.collection,
				bagCollection: this.bagCollection
			 });

			//events methods that will listen for change and then update the collection by calling render function 
			this.listenTo(this.collection, "reset change", this.renderGallery);
			

		},

		//renderGallery function 
		renderGallery: function (collection, options) {
			this.$root.html( this.productsView.render().el)
		},

		getBag: function() {

		}

	});
	
	return Router;
});