# http://emberjs.com/guides/models/defining-a-store/

Account.Store = DS.Store.extend
  adapter: DS.RESTAdapter.create()
