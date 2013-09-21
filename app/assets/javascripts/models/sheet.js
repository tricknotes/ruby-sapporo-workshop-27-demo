Account.Sheet = Ember.Object.extend({
  orderLines: [],
  createdAt:  null,

  id: function() {
    return Account.Sheet.sheets.indexOf(this) + 1;
  }.property('Account.Sheet.sheets.length'),

  total: function() {
    return this.get('orderLines.@each.subtotal').reduce(function(total, subtotal) {
      return total + (subtotal || 0);
    }, 0);
  }.property('orderLines.@each.subtotal')
});

Account.Sheet.sheets = [];
