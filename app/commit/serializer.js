import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  attrs: {
    author: {embedded: 'always'},
  },
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