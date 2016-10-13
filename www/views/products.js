/******************************
Items view class
******************************/

define([
	"backbone",
	"./productdetail"
], function(
	Backbone,
	ProductDetailView
){
	//defines class of picture view
	var ProductsView = Backbone.View.extend({

		views: {
			// pictures views cache
			pictures: {}
		},

		// appending to all image thumbnails
		tagName: 'ul',

		// setting attributes
		attributes: {
			class: 'thumbnails'
		},

		initialize: function(options) {
			this.bagCollection = options.bagCollection;
		},

		// render function which loops through array of images and  stores json object in a model
		render: function (){
			var self = this,
				productDetailView;

			this.el = this.$el;
			this.delegateEvents();
			this.el.html('');

			if (this.collection) {
				this.collection.each(function(model){
					//assigns each picture view to model passsed in as argumnet of function
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
