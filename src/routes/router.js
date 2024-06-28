const { Router } = require("express");
const router = new Router();
const LoginController = require('../controllers/LoginController');

router.get('/', (req, res) => {
  res.status(200).render("home");
});



router.post('/', LoginController.login); 

module.exports = router;
