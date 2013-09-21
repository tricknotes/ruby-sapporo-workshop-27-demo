Account.SheetsController = Ember.ArrayController.extend({
  actions: {
    deleteSheet: function(sheet) {
      if (!confirm('Are you sure?')) {
        return;
      }

      sheet.deleteRecord();
      sheet.save();
    }
  }
});
