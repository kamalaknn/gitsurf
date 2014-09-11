import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('repo',params["owner.login"]+"/"+params["name"]);
  },
  afterModel: function(model) {
    this.currentRepo.set('content',model);
  }
});
