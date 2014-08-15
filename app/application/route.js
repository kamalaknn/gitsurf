import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var model = [];
		model.push(this.store.find('repo','emberjs/ember.js'));
		model.push(this.store.find('repo','emberjs/data'));
		model.push(this.store.find('repo','stefanpenner/ember-cli'));
		return model;
	}
});