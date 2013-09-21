Account.Sheet = DS.Model.extend({
  orderLines: DS.hasMany('orderLine'),
  createdAt:  DS.attr('date'),

  total: function() {
    return this.get('orderLines.@each.subtotal').reduce(function(total, subtotal) {
      return total + (subtotal || 0);
    }, 0);
  }.property('orderLines.@each.subtotal'),

  unloadRecord: function() {
    this._super();

    var orderLine;
    // forEach 使えない問題...
    while (orderLine = this.get('orderLines.firstObject')) {
      orderLine.transitionTo('loaded.saved');
      orderLine.unloadRecord();
    }
  }
});
