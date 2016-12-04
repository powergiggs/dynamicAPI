module.exports = (express) => {
  const router = express.Router();
  router.post('/status', (req, res) => {
    console.log("route hit");
    res.json({
      healthy: true,

    })

  });

  //routes
  router.use('/api/', require('./api/car')(express));
  return router;
}
