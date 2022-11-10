const mongoose = require("mongoose") 
const treeSchema = mongoose.Schema({ 
 tree_name: String, 
 size: String, 
 age: Number 
}) 
 
module.exports = mongoose.model("tree", treeSchema)