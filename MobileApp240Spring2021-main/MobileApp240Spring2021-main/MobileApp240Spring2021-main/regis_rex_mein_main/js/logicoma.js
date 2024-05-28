/*"SELECT ?(foodSel),?(restSel),?(priceSel),?(distSel),?(vegSel) FROM restaurants"*/
// - - - - - alternate value holders for input variables to plug into sql to query db - - - - - //
/*
var foodV = id.food.value;
var restV = id.rest.value;
var priceV = id.price.value;
var distV = id.dist.value;
*/

var results = function() {
    con.connect = JSON.stringify(con.query)
    window.alert
}



//------------------------------ const var(s)//
const foodv = id.food.value;
//const foodV = document.querySelector('food');
const restv = id.rest.value;
//const restV = document.querySelector('rest');
const pricev = id.price.value;
//const priceV = document.querySelector('price');

//const distv = id.dist.value;
const distV = document.querySelector('dist');


// - - - - - BELOW SHOULD WORK FOR DISTANCE - - - - - //
// replace dist.value with distV

//database connector for distance only
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT " + distV + " from restaurants", "ORDER BY RANDOM()", "LIMIT 1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
*/

/*
SELECT column FROM table
ORDER BY RANDOM()
LIMIT 1
*/
/* BELOW SECTION IF FOR SELECTING A PARTICULAR CRITERIA SET FROM A DB */
/*
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
*/