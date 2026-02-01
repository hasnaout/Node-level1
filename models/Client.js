const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//definir schema
const ClientSchema=new Schema({
   nom:String,
   prenom:String,
   email:{type:String, unique:true},
   telephone: String,
   adresse:String,
   password:String
   },{timestamps:true});




//crer model de schema
const ClientModel=mongoose.model('Client',ClientSchema);

//exporter le model
module.exports=ClientModel;