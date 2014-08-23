import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  buildURL: function(type, id) {
    var host = this.get('host');
    var prefix = this.urlPrefix();
    var url = [];
    
    url.push('repos');
    if (id) { 
      var idFragments = id.split('/');
      url.push(idFragments[0]); 
      url.push(idFragments[1]); 
      url.push('commits');
      url.push(idFragments[2]); 
    }

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    if (!host && url) { url = '/' + url; }

    return url;
  }
});