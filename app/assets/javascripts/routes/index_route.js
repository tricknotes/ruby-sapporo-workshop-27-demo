Account.IndexRoute = Ember.Route.extend({
  model: function() {
    var sheet = Account.Sheet.create({
      orderLines: [
        Account.OrderLine.create(),
        Account.OrderLine.create()
      ]
    });

    return sheet;
  }
});
