Account.Router.map(function() {
  this.resource('sheets');
  this.resource('sheet', {path: '/sheet/:id'});
});
