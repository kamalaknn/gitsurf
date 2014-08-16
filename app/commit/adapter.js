import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  buildURL: function(type, id) {
    var url = [],
        host = this.get('host'),
        prefix = this.urlPrefix();

    url.push('repos');

    if (id) { url.push(id); }
    if (type) { url.push(this.pathForType(type)); }
    

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    if (!host && url) { url = '/' + url; }

    return url;
  }
});