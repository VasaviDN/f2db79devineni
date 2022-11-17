var tree = require('../models/tree'); 
 
// List of all trees 
exports.tree_list = async function(req, res) { 
    try{ 
        theTree = await tree.find(); 
        res.send(theTree); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.tree_view_all_Page = async function(req, res) { 
    try{ 
        theTree = await tree.find(); 
        res.render('tree', { title: 'Tree Search Results', results: theTree }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Tree. 
exports.tree_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tree detail: ' + req.params.id); 
}; 
 
// Handle Tree create on POST. 
exports.tree_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new tree(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"tele_name":"Visio", "size":"90 inch", "cost":"800"} 
    document.tree_name = req.body.tree_name;    
    document.size = req.body.size;
    document.age = req.body.age;  
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Tree delete on DELETE. 
exports.tree_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await tree.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Tree update form on PUT. 
exports.tree_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tree update PUT' + req.params.id); 
}; 

// for a specific tree. 
exports.tree_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await tree.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Costume update form on PUT. 
exports.tree_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await tree.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.tree_name)  
               toUpdate.tree_name = req.body.tree_name; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.age) toUpdate.age = req.body.age; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.tree_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await tree.findById( req.query.id) 
        res.render('treedetail',  
{ title: 'Trees Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.tree_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('treecreate', { title: 'Tree Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.tree_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await tree.findById(req.query.id) 
        //
        console.log(result)
        res.render('treeupdate', { title: 'Tree Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.tree_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await tree.findById(req.query.id) 
        res.render('treedelete', { title: 'Tree Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 