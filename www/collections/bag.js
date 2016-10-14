define([
	'underscore',
	'backbone'
], function(
	_,
	Backbone
) {
	'use strict';

	var BagCollection = Backbone.Collection.extend({

		hasBoughtFootwear: function() {
			return _.some(this.models, function(model) {
				var category = model.get('category');

				return category === 'Men’s Footwear' || category === 'Women’s Footwear';
			});
		}
	});

	return BagCollection;
});
