/**
 * This view is an example list of people.
 */
Ext.define('MyUniApp.view.main.EffectsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'effectslist',
    height: 500,
    autoScroll: true,
    requires: [
        'MyUniApp.store.EffectStore'
    ],

    title: 'Personnel',

    store: {
        type: 'effects'
    },

    columns: [
        { text: 'Time',  dataIndex: 'Time', flex: 1},
        { text: 'Plan', dataIndex: 'Plan'},
        { text: 'Actual', dataIndex: 'Actual'}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
