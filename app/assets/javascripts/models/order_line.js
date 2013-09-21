Account.OrderLine = DS.Model.extend({
  productName: DS.attr('string'),
  unitPrice:   DS.attr('number', {defaultValue: 0}),
  count:       DS.attr('number', {defaultValue: 0}),

  sheet: DS.belongsTo('sheet'),

  subtotal: function() {
    return this.get('unitPrice') * this.get('count');
  }.property('unitPrice', 'count')
});
