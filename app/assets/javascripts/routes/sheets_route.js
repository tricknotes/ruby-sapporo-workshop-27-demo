Account.SheetsRoute = Ember.Route.extend({
  model: function() {
    return Account.Sheet.sheets;
  }
});
