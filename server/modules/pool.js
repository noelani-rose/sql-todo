const pg = require('pg');


// database url
// postgres://postgress:password@awsendpoint/dbname
// postgres://postgres:Dgaf14790552126??@ramirez-noelani-demo-db.chi55kmnapwc.us-east-1.rds.amazonaws.com/cloud-todo

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