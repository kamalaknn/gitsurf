import DS from "ember-data";

export default DS.Model.extend({
  sha: DS.attr('string'),
  url: DS.attr('string'),
  htmlUrl: DS.attr('string'),
  commit: DS.attr(),
  
  //relationships
  author: DS.belongsTo('user', { async:true, inverse:null }),
  repo: DS.belongsTo('repo'),
});