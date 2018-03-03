var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_laig',
  password        : 'XXXX',
  database        : 'cs340_laig'
});
module.exports.pool = pool;
