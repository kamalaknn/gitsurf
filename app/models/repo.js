import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	fullName: DS.attr('string'),
	description: DS.attr('string'),
	networkCount: DS.attr('number'),
	subscribersCount: DS.attr('number'),
	owner: DS.attr(),
	gitCommitsUrl: DS.attr('string'),
	commits: DS.hasMany('commit',{async:true})
});
