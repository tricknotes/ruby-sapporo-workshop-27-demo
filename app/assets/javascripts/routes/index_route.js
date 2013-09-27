Account.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('sheets.new');
  }
});
