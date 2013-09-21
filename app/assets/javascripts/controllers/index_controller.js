Account.IndexController = Ember.ObjectController.extend({
  actions: {
    addOrderLine: function() {
      this.get('orderLines').addObject(Account.OrderLine.create());
    },

    deleteOrderLine: function(orderLine) {
      this.get('orderLines').removeObject(orderLine);
    },

    addSheet: function() {
      var sheet = this.get('model');

      sheet.set('createdAt', new Date());
      Account.Sheet.sheets.addObject(sheet);

      this.transitionToRoute('sheets');
    }
  }
});
