import Backbone from 'backbone';
import $ from 'jquery';

import {
	BandName as BandCollection,
	BandProfile as BandModel
} from './resources';

import {
	BandProfile as BandProfileView,
	BandName as BandNameView,
	AddBand,
	Spinner
} from './views';

export default Backbone.Router.extend({

	routes: {
		''					      : 'redirectToBandName',
		'bandName'   	    : 'showBandNames',
		'bandProfile/:id' : 'showBandProfile',
		'addBandProfile'  : 'newBandProfile',
	},

	initialize(appElement) {
		this.$el = appElement;
		this.collection = new BandCollection();

		this.$el.on('click', '.band-name-item', (event) => {
			let $li = $(event.currentTarget);
			let bandId = $li.data('band-id');
			this.navigate(`bandProfile/${bandId}`, {trigger: true});
		});

		this.$el.on('click', '.back-button', (event) => {
			let $button = $(event.currentTarget);
			let route = $button.data('to');
			this.navigate(route, {trigger: true});
		});

		this.$el.on('click', '.add-button', (event) => {
			console.log('should take me to update form');
			let $div = $(event.currentTarget);
			this.navigate(`addBandProfile`, {trigger: true});
		});

		this.$el.on('click', '.submit-band', (event) => {
			let name 		 = $(this.$el).find('.name').val();
			let image    = $(this.$el).find('.image').val();
			let favAlbum = $(this.$el).find('.favAlbum').val();
			let descript = $(this.$el).find('.descript').val();

			let newBand = new BandModel({
				Name: name,
				imageUrl: image,
				favoriteAlbum: favAlbum,
				Description: descript
			});

			this.collection.add(newBand);
			newBand.save().then(() => {
				alert('New band added.  Awesome Taste!');
				this.navigate(`bandName`, {trigger: true});
			});
		});
	},

	start() {
		Backbone.history.start();
		return this;
	},

	showSpinner() {
		this.$el.html( Spinner() );
	},

	redirectToBandName() {
		this.navigate('bandName', {
			replace: true,
			trigger: true
		});
	},

	showBandNames() {
		this.showSpinner();
		this.collection.fetch().then(() => {
			this.$el.html(
				BandNameView(
					this.collection.toJSON()
				)
			);
		});
	},

	showBandProfile(id) {
		let band = this.collection.get(id);

		if (band) {
			this.$el.html( BandProfileView(band.templateData()) );
		} else {
			this.showSpinner();
			band = this.collection.add({objectId: id});
			band.fetch().then(() => {
				this.$el.html( BandProfileView( band.templateData()) );
			});
		}
	},

	newBandProfile() {
		this.showSpinner();
		this.$el.html(AddBand());
	}

});