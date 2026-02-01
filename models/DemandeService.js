 const mongoose=required('mongoose');

const Schema=mongoose.Schema;

const DemandeServiceSchema=new Schema({
    description:String,
    urgence:String,
    budget: Number,
    etat:String,
    adresse_client:String,
    date_publication:Date,
    client:{
        type:mogoose.Schema.Types.ObjectId,
        ref:"Client",
        required:true
    },
    categorie_service:{
        type:mogoose.Schema.Types.ObjectId,
        ref:"CategorieService",
        required:true
    }
},{timestamps:true});
    
const DemandeServiceModel=mongoose.model('DemandeService',DemandeServiceSchema);

module.exports=DemandeServiceModel; 
