/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
// var bookStore = Ext.create('Ext.data.Store', {
//     model: 'Book',
//     autoLoad: true,
//     proxy: {
//         type: 'ajax',
//         reader: 'csv',
//         url: 'users.json'
//     }
// });

Ext.define('MyUniApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'MyUniApp',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
         // Ext.create('Ext.Viewport', {
         //     layout: 'fit',
         //     items: [{
         //         xtype:'grid',
         //         title: 'Books',
         //         store: bookStore,
         //         columns: [
         //            { text: 'Author', dataIndex: 'author' },
         //            { text: 'Title', dataIndex: 'title', flex:1 },
         //            { text: 'Publish Date', dataIndex: 'publishDate' }
         //         ],
         //         height: 200,
         //         width: 400
         //     }],
         //     renderTo: Ext.getBody()
         // });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                debugger;
                if (choice === 'yes') {
                    
                    window.location.reload();
                }
            }
        );
    }
});
