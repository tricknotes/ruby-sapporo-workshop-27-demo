// http://emberjs.com/guides/models/defining-a-store/

Account.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  namespace: 'api'
});

Account.SheetSerializer = DS.ActiveModelSerializer.extend({
  attrs: {
    orderLines: {embedded: 'always'}
  }
});
