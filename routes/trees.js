var express = require('express');
const tree_controlers= require('../controllers/trees'); 
var router = express.Router();

/* GET trees */ 
router.get('/', tree_controlers.tree_view_all_Page ); 

// GET request for one costume. 
//router.get('/tree/:id', tree_controlers.tree_detail); 

/* GET detail Tree page */ 
router.get('/detail', tree_controlers.tree_view_one_Page); 

module.exports = router;