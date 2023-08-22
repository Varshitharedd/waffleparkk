var express = require('express');
var router = express.Router();
var ctrlmenu = require('../controllers/menu');
var ctrlcontact = require('../controllers/contact');

/* GET menu page. */
router.get('/',ctrlmenu.home);
router.get('/menu',ctrlmenu.menu);
router.get('/darkchocolate',ctrlmenu.darkchocolate);
router.get('/whitechocolate',ctrlmenu.whitechocolate);
router.get('/milkchocolate',ctrlmenu.milkchocolate);
/* get contact page */
router.get('/aboutus',ctrlcontact.aboutus);
router.get('/contact', ctrlcontact.contact);
router.get('/reservation', ctrlcontact.reservation);
module.exports= router;