import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({

  /*I reset users id as their login because gitHub api serves payload at api.gitHub.com/users/login
  cant use primaryKey as login along with EmbededRecordsMixin - relationship pointer somewhere still remains numeric id
  and attempts to query url api.github.com/users/:id
  */
  normalize(type, hash, prop) {
    hash.id = hash.login;
    return this._super(type, hash, prop);
  },
  extractArray(store, type, payload) {
    payload.forEach(function(record) {
      record.links = { "reps" : 'repos' };
    });
    return this._super(store, type, payload);
  },
  extractSingle(store, type, payload) {
    payload.links = { "reps" : 'repos' };
    return this._super(store, type, payload);
    
  }
});