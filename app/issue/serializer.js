import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  extractArray: function(store, type, payload) {
//    var self = this;
    var repoID = this.currentRepo.get('id');
    payload.forEach(function(record) {
      record.repo = repoID;
    });
    return this._super(store, type, payload);
  },
  extractSingle: function(store, type, payload) {
    payload.repo = this.currentRepo.get('id');
    return this._super(store, type, payload);
  }
});