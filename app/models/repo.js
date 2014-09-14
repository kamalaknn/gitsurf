import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  fullName: DS.attr('string'),
  description: DS.attr('string'),
  networkCount: DS.attr('number'),
  subscribersCount: DS.attr('number'),
  owner: DS.attr(),
  gitCommitsUrl: DS.attr('string'),
  
  //relationships
  commits: DS.hasMany('commit',{async:true}),
  pulls: DS.hasMany('pull',{async:true}),
  contributors: DS.hasMany('user',{async:true}),
  issues: DS.hasMany('issue',{async:true})
});
