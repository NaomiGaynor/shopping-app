/******************************
products view class
******************************/

define([
	"backbone",
	"./productdetail"
], function(
	Backbone,
	ProductDetailView
){

	var ProductsView = Backbone.View.extend({

		views: {
			pictures: {}
		},

		tagName: 'ul',

		attributes: {
			class: 'thumbnails'
		},

		initialize: function(options) {
			this.bagCollection = options.bagCollection;
		},

		render: function (){
			var self = this,
				productDetailView;

			this.el = this.$el;
			this.delegateEvents();
			this.el.html('');

			if (this.collection) {
				this.collection.each(function(model){
					productDetailView = new ProductDetailView({
						model: model,
						bagCollection: this.bagCollection
					});

					this.views.pictures[productDetailView.cid] = ProductDetailView;
					this.$el.append( productDetailView.render().el );
				}, this);
			}

			return this;
		}

	});

	return ProductsView;
});
