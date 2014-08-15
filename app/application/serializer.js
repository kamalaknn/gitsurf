import DS from 'ember-data';
import Ember from 'ember';

export default DS.ActiveModelSerializer.extend({
	extractArray: function(store, type, payload) {
		var res = {};
		res[Ember.pluralize(type.typeKey)] = payload;
    	return this._super(store, type, res);
    },
    extractSingle: function(store, type, payload) {

		var res = {};
		res[type.typeKey] = payload;
	    return this._super(store, type, res);
  }
});