Account.IndexRoute = Ember.Route.extend({
  model: function() {
    var sheet = Account.Sheet.create({
      lines: [
        Account.OrderLine.create(),
        Account.OrderLine.create()
      ]
    });

    return sheet;
  }
});
