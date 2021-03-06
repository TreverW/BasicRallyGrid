Ext.define('CustomApp', {
  extend: 'Rally.app.App',
  componentCls: 'app',
  items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
  launch: function() {
        //Write app code here
        console.log("Our App has launched.");
        this._loadData();
      },

    // Get data from Rally
    _loadData: function() {

      var myStore = Ext.create('Rally.data.wsapi.Store', {
        model: 'User Story',
        autoLoad: true,
        listeners: {
          load: function(myStore, myData, mySuccess) {
            console.log("Got Data:", myStore, myData, mySuccess);
            this._loadGrid(myStore);
          },
          scope: this
        },
        fetch: ['FormattedID', 'Name', 'ScheduleState', 'Increment']
      });
    },

    // Create and show a grid of given stories
    _loadGrid: function(myStoryStore) {
      var myGrid = Ext.create('Rally.ui.grid.Grid', {
        store: myStoryStore,
        columnCfgs: [
        'FormattedID', 'Name', 'ScheduleState', 'Increment'
        ]});

      this.add(myGrid);
      console.log('What is this?', this);
    }
  });
