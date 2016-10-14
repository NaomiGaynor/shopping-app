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
	'use strict';

	var ProductsCollection = Backbone.Collection.extend({

		//connects with flickr api
		rootApi: '../../mocks/products.js',

		model: ProductModel

	});

	return ProductsCollection;
});
