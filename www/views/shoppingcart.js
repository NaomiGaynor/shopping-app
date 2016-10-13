define([
	'underscore',
	'backbone',
	'./cartitem',
	'text!templates/shoppingcart.html'
], function(
	_,
	Backbone,
	CartItemView,
	tpl
){
	//defines class of picture view
	var ShoppingCartView = Backbone.View.extend({

		views: {
			// pictures views cache
			pictures: {}
		},

		template: _.template(tpl),

		// appending to all image thumbnails
		tagName: 'ul',

		serialize: function() {
			var total = this.calculateTotal();
		},

		// render function which loops through array of images and  stores json object in a model
		render: function (){
			var self = this,
				cartItem;

			this.el = this.$el;
			this.delegateEvents();

			if (this.collection) {
				this.collection.each(function(model){
					//assigns each picture view to model passsed in as argumnet of function
					cartItem = new CartItemView({
						model: model,
						collection: this.collection
					});
					this.$el.append( cartItem.render().el );
				}, this);
				this.el.html(this.template(this.serialize()));
			}

			return this;
		},

		calculateTotal: function() {
			var productPrices = this.getPrices();

			productPrices.reduce(function(prev, current) {
				return prev + current;
			}, 0);
		},

		getPrices: function() {
			var prices = this.collection.pluck('price_value');

			return prices;
		}

	});

	return ShoppingCartView;
});
