const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const DemandeServiceSchema=new Schema({
    description:String,
    urgence:String,
    budget: Number,
    etat:String,
    adresse_client:String,
    date_publication:Date,
    Client:{
        type:mogoose.Schema.Types.ObjectId,
        ref:"Client",
        required:true
    },
    CategorieService:{
        type:mogoose.Schema.Types.ObjectId,
        ref:"CategorieService",
        required:true
    }
},{timestamps:true});
    
const DemandeService=mongoose.model('DemandeService',DemandeServiceSchema);
module.exports=DemandeService; 