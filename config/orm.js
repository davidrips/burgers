var connection = require('../config/connection.js');

var orm = {
    addNew: function(whatToSelect, tableInput) {
        var queryString = 'SELECT ' +whatToSelect + ' FROM '+tableInput;


        connection.query(queryString, function(err, result){
            console.log(result);
        });
    },

    updateDb: function(tableInput, colToSearch, valofCol) {
        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE '+colToSearch+' = ?';

        connection.query(queryString, [valofCol], function(err, result){
            console.log(result);
        });
    },


    leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
 var queryString = 'SELECT ' + whatToSelect + ' FROM ' + tableOne + ' as tOne';
        queryString = queryString + ' LEFT JOIN ' + tableTwo + ' as tTwo';
        queryString = queryString + ' ON tOne.' + onTableOneCol + ' = tTwo.' +  onTableTwoCol;
        console.log(queryString)
        connection.query(queryString, function(err, result){
            console.log(result);
        });
    }
};
module.exports = orm;
