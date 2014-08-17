import DS from 'ember-data';

export default DS.Model.extend({
  htmlUrl: DS.attr('string'),
  login: DS.attr('string'),
  name: DS.attr('string'),
  avatarUrl: DS.attr('string'),
});