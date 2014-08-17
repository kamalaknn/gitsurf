import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  extractArray: function(store, type, payload) {
    payload.forEach(function(record) {
      record.id = record.login;
      record.links = { "reps" : 'repos' };
    });
    return this._super(store, type, payload);
  },
  extractSingle: function(store, type, payload) {
    payload.id = payload.login;
    payload.links = { "reps" : 'repos' };
    window.console.log(payload);
    return this._super(store, type, payload);
  }
});