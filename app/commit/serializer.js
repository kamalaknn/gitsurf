import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
	extractArray: function(store, type, payload) {
		payload.forEach(function(record) {
			record.id = record.sha;
		});
    	return this._super(store, type, payload);
    },
    extractSingle: function(store, type, payload) {
    	payload.forEach(function(record) {
			record.id = record.sha;
		});
	    return this._super(store, type, payload);
  	}
});