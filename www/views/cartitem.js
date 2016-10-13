define([
	'jquery',
	'underscore',
	'backbone',
	'underscore',
	'../models/bagitem',
	'text!templates/cartitem.html'
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
	var CartItemView = Backbone.View.extend({

		tagName: "li",

		events: {
			'click .bag__remove': 'onClick'
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

			this.removeProductFromBag();
			this.render();
		},

		removeProductFromBag: function() {

			this.collection.remove(this.model);
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
	return CartItemView;

});
