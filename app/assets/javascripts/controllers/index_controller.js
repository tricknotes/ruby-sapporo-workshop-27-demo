Account.IndexController = Ember.ObjectController.extend({
  actions: {
    addOrderLine: function() {
      this.get('orderLines').createRecord();
    },

    deleteOrderLine: function(orderLine) {
      // TODO unload this.
      // orderLine.unloadRecord();
    },

    addSheet: function() {
      var sheet = this.get('model');

      sheet.save();

      this.transitionToRoute('sheets');
    }
  }
});
