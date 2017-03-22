Ext.define('CsvReader', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.csv',

    // converts csv into json
    csvToJson: function (csvData) {
        console.log(csvData);
        debugger;
        try {
            var lines = csvData.split("\r\n");
            var colNames = lines[0].split(",");
            var records = [];
            for (var i = 1; i < lines.length; i++) {
                if (lines[i] == "") continue;
                var record = {};
                var bits = lines[i].split(",");
                for (var j = 0; j < bits.length; j++) {
                    record[colNames[j]] = bits[j];
                }
                records.push(record);

            }
        } catch(e){
            console.log("Ignore error but continue");
        } finally{
            return records;
        }
    },

    // override
    getResponseData: function (response) {
         try {
             var respText = JSON.stringify({items: this.csvToJson(response.responseText)});
             console.log(respText);
             response.responseText = respText;
             return this.callParent([response]);
             // return this.callParent([result]);
         } catch (ex) {
             error = new Ext.data.ResultSet({
                 total: 0,
                 count: 0,
                 records: [],
                 success: false,
                 message: ex.message
             });
             this.fireEvent('exception', this, response, error);
             console.log(error);
             return error;
         }
     },

    // override
    // readRecords: function (strData) {
    //     var results = this.csvToJson(strData);
    //     debugger;
    //     return this.callParent([results]);
    // }
});