/**
 * This view is an example list of people.
 */
Ext.define('MyUniApp.view.main.BookList', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyUniApp.store.BookStore'
    ],

    title: 'Personnel',

    store: {
        type: 'bookstore'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
