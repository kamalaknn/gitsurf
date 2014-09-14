import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  // generate id for a commit as 'user/repo/number'
  _makeId: function(url) {
    var urlSlices = url.split('/');
    var sliceLength = urlSlices.length;
    var idFragments = [];
    
    idFragments.push(urlSlices[sliceLength-4]); 
    idFragments.push(urlSlices[sliceLength-3]); 
    idFragments.push(urlSlices[sliceLength-1]);
    
    return idFragments.join('/');
  },
  
  normalize: function(type, hash, prop) {  
    if(hash.user){
      hash.user.id = hash.user.login;
  
      /**
        after insane digging, traced it to 
        https://github.com/emberjs/data/blob/v1.0.0-beta.9/packages/activemodel-adapter/lib/system/active_model_serializer.js#L278
        where payloadKey was author_id TODO find out the exact reason why author_id of the hash was looked up 
      */

      hash.user_id = hash.user.login;
    }
    
    return this._super(type, hash, prop);
  },
  extractArray: function(store, type, payload) {
    var self = this;
    var repoID = this.currentRepo.get('id');
    payload.forEach(function(record) {
      record.id = self._makeId(record.url);
      record.repo = repoID;
    });
    return this._super(store, type, payload);
  },
  extractSingle: function(store, type, payload) {
    payload.id = this._makeId(payload.url);
    payload.repo = this.currentRepo.get('id');
    return this._super(store, type, payload);
  }
});