const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CategorieServiceSchema=new Schema({
    nom_cat:String,
    description:String
});

const CategorieService=mongoose.model('CategorieService',CategorieServiceSchema);
module.exports=CategorieService;