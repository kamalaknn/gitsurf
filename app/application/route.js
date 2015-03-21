import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.all([
      this.store.find('repo', 'emberjs/ember.js'),
      this.store.find('repo', 'emberjs/data'),
      this.store.find('repo', 'ember-cli/ember-cli')
    ]);
  }
});