const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FichierSchema=new Schema({
    nom_fichier:String,
    type_fichier:String,
    url: String,
    Demande_Service:{type:Schema.Types.ObjectId,
     ref:'DemandeService'}
});

const FichierModel=mongoose.model('Fichier',FichierSchema);

module.exports=FichierModel;