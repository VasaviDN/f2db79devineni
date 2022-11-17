var express = require('express');
const tree_controlers= require('../controllers/trees'); 
var router = express.Router();

/* GET trees */ 
router.get('/', tree_controlers.tree_view_all_Page ); 

// GET request for one costume. 
router.get('/tree/:id', tree_controlers.tree_detail); 

/* GET detail Tree page */ 
router.get('/detail', tree_controlers.tree_view_one_Page); 

/* GET create costume page */ 
router.get('/create', tree_controlers.tree_create_Page); 

/* GET create update page */ 
router.get('/update', tree_controlers.tree_update_Page); 

/* GET delete costume page */ 
router.get('/delete', tree_controlers.tree_delete_Page); 

module.exports = router;