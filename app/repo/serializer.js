import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  extractArray(store, type, payload) {
    payload.forEach(function(record) {
    record.id = record.full_name;
    record.links = { "commits" : "commits", "pulls" : "pulls", "issues" : "issues", "contributors" : "contributors"  };
    });
    return this._super(store, type, payload);
  },
  extractSingle(store, type, payload) {
    payload.id = payload.full_name;
    payload.links = { "commits" : 'commits', "pulls" : "pulls", "issues" : "issues", "contributors" : "contributors"  };
    return this._super(store, type, payload);
  }
});