import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var urlSlices = this.router.get('url').split('/');
    var id = [];
    id.push(urlSlices[1]);
    id.push(urlSlices[2]);
    id.push(urlSlices[4]);
    window.console.log("url "+ this.router.get('url'));
    window.console.log(id.join('/'));
    return this.store.find('commit',id.join('/'));
  }
});