import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  
  /*cannot use author as embeded because I reset id as login 
  to ease store.findById as the right response is from api.github.com/users/:login 
  somewhere in using EmbeddedRecordsMixin the pointer to belongsTo of author stil remains the gitHub numeric id*/
//  attrs: {
//    author: {deserialize: 'records'}
//  },

  /* generate id for a commit as 'user/repo/sha' */
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
    if(hash.author){
      hash.author.id = hash.author.login;
  
      /*after insane digging, traced it to 
        https://github.com/emberjs/data/blob/v1.0.0-beta.9/packages/activemodel-adapter/lib/system/active_model_serializer.js#L278
        where payloadKey was author_id TODO find out the exact reason why author_id of the hash was looked up */

      hash.author_id = hash.author.login;
    }
    
    return this._super(type, hash, prop);
  },
  extractArray: function(store, type, payload) {
    var self = this;
    payload.forEach(function(record) {
      record.id = self._makeId(record.url);
    });
    return this._super(store, type, payload);
  },
  extractSingle: function(store, type, payload) {
    payload.id = this._makeId(payload.url);
    return this._super(store, type, payload);
  }
});