// http://emberjs.com/guides/models/defining-a-store/

Account.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  namespace: 'api'
});

// Account.ApplicationAdapter.map('sheet', {
//   orderLine: {embedded: 'always'}
// });

DS.ActiveModelSerializer.reopen({
  serializeHasMany: function(record, json, relationship) {
    var key   = relationship.key;
    var attrs = this.attrs;
    var embed = attrs && attrs[key] && attrs[key].embedded === 'always';

    if (embed) {
      json[this.keyForAttribute(key)] = record.get(key).map(function(relation) {
        var data = relation.serialize();
        var primaryKey = this.get('primaryKey');

        data[primaryKey] = relation.get(primaryKey);

        return data;
      }, this);
    }
  }
});

Account.SheetSerializer = DS.ActiveModelSerializer.extend({
  attrs: {
    orderLines: {embedded: 'always'}
  }
});
