Ext.define('MyUniApp.store.BookStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    alias: 'store.bookstore',
    model: 'Book',
    proxy: {
        type: 'ajax',
        reader: {
            type: 'csv',
            rootProperty: 'items'
        },
        url: 'data.csv'
    }
});