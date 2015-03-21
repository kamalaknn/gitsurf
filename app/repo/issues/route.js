import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var self = this;
    return this.store.filter('issue', {repo:this.currentRepo.get('id')},function(record) {
      return record.get('repo.id') === self.currentRepo.get('id');
    });
  }
});