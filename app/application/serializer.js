import DS from 'ember-data';
var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);

export default DS.ActiveModelSerializer.extend({
  extractArray: function(store, type, payload) {
    var res = {};
    res[inflector.pluralize(type.typeKey)] = payload;
    return this._super(store, type, res);
  },
  extractSingle: function(store, type, payload) {
    var res = {};
    res[type.typeKey] = payload;
    return this._super(store, type, res);
  }
});