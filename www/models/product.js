/**************************************
Module to build image model
**************************************/

define([
	"backbone"
], function (
	Backbone
){
		//defines class for model 
	var ImageModel = Backbone.Model.extend({

		parse: function (response) {
			// sets fileName to jpg image
			response.fileName = this.urlTruncate(response.media.m);
			//stores tags of images into an array
			response.tagsArray = response.tags.split(' ');
			return response;
		},
		//funtion to get filename of image form api url and will then return it.
		getFileName: function (){
			var fileName = "";

			if (this.get('media')){
				fileName = this.urlTruncate(this.get("media").m)
			}
			return fileName;
		},
		//filename uses this function to take the last section of the array as a string so that it can be used as fileName
		urlTruncate: function (url){
			return url.split("/").pop();
		}
	});
	return ImageModel;
});