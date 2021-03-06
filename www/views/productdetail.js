	/*************************************
	defines productdetailview class
	*************************************/

define([
	'jquery',
	'underscore',
	'backbone',
	'underscore',
	'../models/bagitem',
	'text!templates/productdetail.html'
], function (
	$,
	_,
	Backbone,
	underscore,
	BagItemModel,
	tpl
){
	'use strict';
	//defining class of view for individual images
	var ProductDetailView = Backbone.View.extend({

		tagName: "li",

		attributes: {
			class: "list-image"
		},

		events: {
			'click .pd__add-to-bag': 'onClick'
		},

		template: _.template(tpl),

		initialize: function(options) {
			this.bagCollection = options.bagCollection;
		},


		serialize: function() {
			var context = {};

			if (this.model) {
				context = this.model.toJSON();
			}

			return context;
		},

		onClick: function(event) {
			event.preventDefault();

			if (this.hasProducts()) {
				this.addProductToBag();
			} else {
				alert('No Products Remaining');
			}
		},

		hasProducts: function() {
			return this.model.get('quantity') > 0;
		},

		addProductToBag: function() {
			var currentQuantity = this.model.get('quantity'),
				newQuantity = currentQuantity - 1,
				bagItem;

			this.model.set('quantity', newQuantity);
			bagItem = new BagItemModel(this.model.attributes);
			this.bagCollection.add(bagItem);
			this.render();
		},

		render: function(){

			if (!this.template) {
				throw Error('BaseView.render(): <template> property is required!');
			}

			this.el = this.$el;
			this.delegateEvents(this.events);
			this.el.html(this.template(this.serialize()));

			return this;
		}

	});
	return ProductDetailView;

});
