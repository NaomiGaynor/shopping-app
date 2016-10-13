/************************************
Bag View
************************************/

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/bag.html'
], function(
	$,
	_,
	Backbone,
	tpl
) {
	'use strict';

	var BagView = Backbone.View.extend({

		template: _.template(tpl),

		events: {
			'click': 'onClick'
		},

		render: function() {
			this.el = this.$el;
			this.delegateEvents(this.events);
			this.el.html(this.template());

			return this;
		},

		onClick: function(event) {
		}

	});

	return BagView;
});
