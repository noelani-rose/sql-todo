const pg = require('pg');


let pool;
if (process.env.DATABASE_URL){
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
  })
}
else {
  let pool = new pg.Pool({
    database: "cloud-todo"
  });
}
module.exports = pool;