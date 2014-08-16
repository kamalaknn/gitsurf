import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    window.console.log("url "+ this.router.get('url'));
    window.console.log(params);
    return this.store.find('commit',params.id);
  }
});