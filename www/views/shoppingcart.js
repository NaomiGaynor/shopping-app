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

		className: 'bag__cart',

		initialize: function() {
			this.listenTo(this.collection, 'removeItem', this.render);
		},

		serialize: function() {
			var total = this.calculateTotal();

			return {
				total: total
			};
		},

		// render function which loops through array of images and  stores json object in a model
		render: function (){
			var self = this,
				renderedCartItems = [],
				cartItem;

			this.delegateEvents();

			if (this.collection) {
				this.$el.html(this.template(this.serialize()));

				this.collection.each(function(model){
					//assigns each picture view to model passsed in as argumnet of function
					cartItem = new CartItemView({
						model: model,
						collection: this.collection
					});

					renderedCartItems.push(cartItem.render().el);
				}, this);

				this.$el.find('ul').append( renderedCartItems );
			}

			return this;
		},

		calculateTotal: function() {
			var productPrices = this.getPrices();
				totalPrice = productPrices.reduce(function(prev, current) {
					return prev + current;
				}, 0);

			return totalPrice;
		},

		getPrices: function() {
			var prices = this.collection.pluck('price_value');

			return prices;
		}

	});

	return ShoppingCartView;
});
