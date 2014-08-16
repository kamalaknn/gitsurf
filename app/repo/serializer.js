import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  extractArray: function(store, type, payload) {
    payload.forEach(function(record) {
    record.id = record.full_name;
    record.links = { "commits" : 'commits' };
    });
    return this._super(store, type, payload);
  },
  extractSingle: function(store, type, payload) {
    payload.id = payload.full_name;
    payload.links = { "commits" : 'commits' };
    return this._super(store, type, payload);
  }
});