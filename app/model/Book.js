Ext.define('Book', {
    extend: 'Ext.data.Model',
    fields: ['name', 'gmail', 'phone']
});

/* 
fields: [
        {name: 'author', type: 'string'},
        {name: 'title', type: 'string'},
        {name: 'publishDate', type: 'string'}
    ]
Ext.define('MyUniApp.store.BookStore', {
    extend: 'Ext.data.Store',
    alias: 'store.book',
    model: 'Book',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: 'csv',
        url: 'data.csv'
    }
});
*/