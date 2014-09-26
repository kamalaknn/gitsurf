import DS from 'ember-data';

export default DS.Model.extend({
  htmlUrl: DS.attr('string'),
  login: DS.attr('string'),
  email: DS.attr('string'),
  followers: DS.attr('number'),
  name: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  
  //relationships
  repos: DS.hasMany('repo',{ async: true, inverse: null })
});