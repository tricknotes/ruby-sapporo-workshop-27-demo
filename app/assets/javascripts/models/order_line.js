Account.OrderLine = Ember.Object.extend({
  productName: null,
  unitPrice:   0,
  count:       0,

  subtotal: function() {
    return this.get('unitPrice') * this.get('count');
  }.property('unitPrice', 'count')
});
