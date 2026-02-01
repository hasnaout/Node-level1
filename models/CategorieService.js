const mongoose=required('mongoose');

const Schema=mongoose.Schema;

const CategorieServiceSchema=new Schema({
    nom_cat:String,
    description:String
});

const CategorieServiceSchemaModel=mongoose.model('CategorieService',CategorieServiceSchema);

module.exports=CategorieServiceSchemaModel;