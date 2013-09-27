Account.SheetsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').findAll('sheet');
  }
});
