import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('repo',params["owner.login"]+"/"+params["name"]);
  },
  afterModel(model) {
    this.currentRepo.set('content',model);
  }
});
