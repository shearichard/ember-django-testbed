import Ember from 'ember';

export default Ember.Route.extend({  
    model: function(params) {
        return this.store.find('rose', params.rose_id);
    }
});
