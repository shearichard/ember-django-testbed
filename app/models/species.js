import DS from 'ember-data';

export default DS.Model.extend({
    binomialNomenclature: DS.attr(),
    heightAndSpread: DS.attr(),
    created: DS.attr('date'),
    modified: DS.attr('date')
});
