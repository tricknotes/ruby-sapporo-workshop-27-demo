Account.LinkToSocialComponent = Ember.Component.extend({
  tagName:   'a',
  target:    '_blank',
  mediaType: null,
  account:   null,

  attributeBindings: ['href', 'target', 'title'],

  href: function() {
    var mediaType = this.get('mediaType');
    var account   = this.get('account');
    var tempalte  = Account.LinkToSocialComponent.mediaToUrls[mediaType]

    return tempalte.fmt(account);
  }.property('mediaUrl', 'account'),

  title: function() {
    return '@' + this.get('account');
  }.property('account'),

  iconClass: function() {
    return 'icon-' + this.get('mediaType');
  }.property('mediaType')
});

Account.LinkToSocialComponent.mediaToUrls = {
  twitter: "https://twitter.com/%@",
  github:  "https://github.com/%@"
};
