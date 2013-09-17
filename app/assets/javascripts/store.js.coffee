# http://emberjs.com/guides/models/defining-a-store/

DemoApp.Store = DS.Store.extend
  adapter: DS.RESTAdapter.create()
