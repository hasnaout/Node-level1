const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FichierSchema=new Schema({
    nom_fichier:String,
    type_fichier:String,
    url: String,
    DemandeService:{type:Schema.Types.ObjectId,
     ref:'DemandeService'}
});

const Fichier=mongoose.model('Fichier',FichierSchema);
module.exports=Fichier;