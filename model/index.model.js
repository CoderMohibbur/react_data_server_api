var db = require('../db-config/db');

var getTest = function (req, res, id) {
    var sql = "spGetInsInstitute ";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
// @id
// ,@first_Name
// ,@last_Name
// ,@email_Address
// ,@phone_Number
// ,@home_address
var asyncTest = async function (req, res, reqBody) {

    reqBody.filter(async (value, index) => {
        var awaitValue = await value;
        var sql = "spSetUser '"+awaitValue.id+"','" + awaitValue.first_Name + "','" + awaitValue.last_Name + "','" + awaitValue.email_Address + "','" + awaitValue.phone_Number + "','" + awaitValue.home_address + "'";
        // var sql =  "INSERT INTO dbo.test3 (first_Name,last_Name,email_Address,phone_Number,home_address) VALUES ('"+awaitValue.first_Name+"','"+awaitValue.last_Name+"','"+awaitValue.email_Address+"','"+awaitValue.phone_Number+"','"+awaitValue.home_address+"')";
        console.log(sql);
        
        db.executeSql(sql, function (data, err) {
            if (err) {
                throw err;
            } else {
                var result = data.recordset;
                console.log(result);
            }
            res.end();
        });

    })
}


module.exports = {
    getTest,
    asyncTest
}
