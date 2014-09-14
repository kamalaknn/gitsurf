import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var self = this;
    return this.store.find('pull',{repo:this.currentRepo.get('id')},function(record) {
      return record.get('repo.id') === self.currentRepo.get('id');
    });
  }
});