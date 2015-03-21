import ApplicationAdapter from '../application/adapter';
import Ember from 'ember';

var get = Ember.get;

export default ApplicationAdapter.extend({
  //Overriding just to prevent URI encoding of repo slugs
  buildURL(type, id/*, record*/) {
     var url = [];
      var host = get(this, 'host');
      var prefix = this.urlPrefix();

      if (type) { url.push(this.pathForType(type)); }

      //We might get passed in an array of ids from findMany
      //in which case we don't want to modify the url, as the
      //ids will be passed in through a query param
      if (id && !Ember.isArray(id)) { url.push(id); }

      if (prefix) { url.unshift(prefix); }

      url = url.join('/');
      if (!host && url) { url = '/' + url; }

      return url;
  }
});