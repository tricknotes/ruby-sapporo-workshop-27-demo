Account.IndexController = Ember.ObjectController.extend({
  actions: {
    addOrderLine: function() {
      this.get('lines').addObject(Account.OrderLine.create());
    },

    deleteOrderLine: function(orderLine) {
      this.get('lines').removeObject(orderLine);
    },

    addSheet: function() {
      var sheet = this.get('model');

      sheet.set('createdAt', new Date());
      Account.Sheet.sheets.addObject(sheet);

      this.transitionToRoute('sheets');
    }
  }
});
