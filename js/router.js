import Backbone from 'backbone';
import $ from 'jquery';

import {
	BandName as BandCollection
} from './resources';

import {
	BandProfile as BandProfileView,
	BandName as BandNameView,
	Spinner
} from './views';

export default Backbone.Router.extend({

	routes: {
		''					      : 'redirectToBandName',
		'bandName'   	    : 'showBandNames',
		'bandProfile/:id' : 'showBandProfile'
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
	}


});