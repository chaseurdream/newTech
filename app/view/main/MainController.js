/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyUniApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    renderSign: function (value) {
        var text = Ext.util.Format.number(value),
            tpl = this.signTpl,
            data = this.data;

        if (Math.abs(value) > 0.1) {
            if (!tpl) {
                this.signTpl = tpl = this.getView().lookupTpl('signTpl');
                this.data = data = {};
            }

            data.value = value;
            data.text = text;

            text = tpl.apply(data);
        }
        return text;
    },

     renderStart: function(value, meta, record){
        meta.style = (record.get('Planned Start') - value >= 0) ? "color:green;" : "color:red;";
        return Ext.Date.format(value, 'd.M.Y');
    },

    renderEnd: function(value, meta, record){
        meta.style = (record.get('Planned End') - value >= 0) ? "color:green;" : "color:red;";
        console.log((record.get('Planned End') - value));
        return Ext.Date.format(value, 'Y-M-d') + ' delayed by ('+ Math.ceil(Math.abs(record.get('Planned End') - value) / (1000 * 3600 * 24) ) +') days';
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
