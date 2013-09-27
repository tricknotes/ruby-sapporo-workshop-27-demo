//=require moment

Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).format('YYYY/MM/DD HH:mm');
});
