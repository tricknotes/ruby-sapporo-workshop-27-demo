Account.IndexRoute = Ember.Route.extend({
  model: function() {
    var store = this.get('store');
    var sheet = store.createRecord('sheet');

    sheet.get('orderLines').createRecord();
    sheet.get('orderLines').createRecord();

    return sheet;
  },

  exit: function() {
    var model = this.get('controller.model');

    if (model.get('isDirty')) {
      model.transitionTo('loaded.saved');

      model.unloadRecord();
    }
  }
});
