const pg = require('pg');

let pool = new pg.Pool({
  database: "cloud_todo"
});

module.exports = pool;