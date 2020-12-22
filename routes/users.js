module.exports = (router) => {
  /* GET users listing. */
  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
}