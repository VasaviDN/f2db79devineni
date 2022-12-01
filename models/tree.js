const mongoose = require("mongoose") 
const treeSchema = mongoose.Schema({ 
 tree_name: {
    type: String,
    required:true,
    minLength:4,
    maxLength:25
 }, 
 size: String, 
 age: {
    type: Number,
    required:true,
    min:0,
    max:1000
 }
}) 
 
module.exports = mongoose.model("tree", treeSchema)