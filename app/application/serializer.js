import DS from 'ember-data';
import Ember from 'ember';

var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin,{
  extractArray(store, type, payload) {
    var res = {};
    res[inflector.pluralize(type.typeKey)] = payload;
    return this._super(store, type, res);
  },
  extractSingle(store, type, payload) {
    var res = {};
    res[type.typeKey] = payload;
    return this._super(store, type, res);
  }
});