/*********************************
Module to build router
*********************************/

define([
	'backbone',
	'./collections/products',
	'./collections/bag',
	'./views/products',
	'./views/bag',
	'./views/shoppingcart',
	'../mocks/products'
], function (
	Backbone,
	ProductsCollection,
	BagCollection,
	ProductsView,
	BagView,
	ShoppingCartView,
	mocks
) {
	'use strict';

		//defines custom router class
	var Router = Backbone.Router.extend({

		//specified routes for app
		routes: {
			'': 'renderGallery',
			'bag': 'getBag'
		},

		initialize: function (options){

			//set $root to equal $el, passed in from contents.js module
			this.$root = options.$el;
			this.$bag = options.$bag;

			// loads new collection class into collections object and calls function to extend collection
			if (!this.collection) {
				this.collection = new ProductsCollection(mocks);
			}

			if (!this.bagCollection) {
				this.bagCollection = new BagCollection();
			}

			//loads new views class into views object and links view with collection and calls PituresView extend function
			this.productsView = new ProductsView({
				collection: this.collection,
				bagCollection: this.bagCollection
			});

			this.bagView = new BagView();

			this.shoppingCart = new ShoppingCartView({
				collection: this.bagCollection
			});
		},

		//renderGallery function
		renderGallery: function () {
			this.$root.html( this.productsView.render().el );
			this.$bag.html( this.bagView.render().el );
		},

		getBag: function() {
			this.$root.html( this.shoppingCart.render().el );
		}

	});

	return Router;
});
