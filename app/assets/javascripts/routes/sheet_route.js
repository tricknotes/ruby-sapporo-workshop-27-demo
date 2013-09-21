Account.SheetRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('sheet', params.id);
  }
});
