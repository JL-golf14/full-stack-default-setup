var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'employee_calc',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

// NOTE: Get all apps
router.get('/employee', function(req, res) {
  console.log('routes.js/router.get (Get all Apps) reached');
  pool.connect(function(err, client, done) {
    if(err) {
      console.log('error on routes.js/router.get-pool.connect', err);
      res.sendStatus(500);
    } else {
      // NOTE: Database Query
      client.query('SELECT * FROM employeetable;', function(err, result) {
        done(); // NOTE: Close the database connection
        if(err) {
          res.sendStatus(500);
        } else {
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

router.post('/addWorker', function(req, res) {
  console.log('hit post route');
  console.log('here is the body ->', req.body);

  var workerObject = req.body;

  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('INSERT INTO employeetable (first_name, last_name, employee_id, job_title, annual_salary) VALUES ($1, $2, $3, $4, $5);',
        [workerObject.first_name, workerObject.last_name, workerObject.employee_id, workerObject.job_title, workerObject.annual_salary], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            res.sendStatus(201);
          }
      });
    }
  });
});



router.post('/addMonth', function(req, res) {
  console.log('hit post route');
  console.log('here is the body ->', req.body);

  var monthObject = req.body;

  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('INSERT INTO monthly_expenses (month_costs) VALUES ($1);',
        [monthObject.monthlyCostInput], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            res.sendStatus(201);
          }
      });
    }
  });
});





router.delete('/:id', function(req, res) {
  var employeeToDeleteId = req.params.id;
  console.log('hit delete route');
  // db query
  // DELETE FROM task WHERE id=7
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('DELETE FROM employeetable WHERE id=$1;',
        [employeeToDeleteId], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500); // the world exploded
          }else{
            res.sendStatus(200);
          }
      });
    }
  });
});



module.exports = router;
