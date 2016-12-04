const car = require('../../models/car');

module.exports = (express) => {
  const router = express.Router();

// read all
  router.get('/cars', (req, res) => {
    car.findAll( (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);

    })

  });

  // read one
  router.get('/cars/:id', (req, res) => {
    req.body.id = req.params.id
    car.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);

    })

  });

  // delete
  router.delete('/cars/:id', (req, res) => {
    req.body.id = req.params.id
    car.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);

    })

  });

  // update
  router.post('/cars/:id', (req, res) => {
    req.body.id = req.params.id
    car.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);

    })

  });




  // create

  router.post('/cars', (req, res) => {
    car.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })

  });
  return router;
}
