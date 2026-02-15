const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PropositionSchema=new Schema({
    message:String,
    prix_proposition:Number,
    date_proposition:{type:Date,default:Date.now},
    statut:String,
    Prestataire:{type:Schema.Types.ObjectId,
        ref:"Prestataire",
        required:true
    },
    DemandeService:{type:Schema.Types.ObjectId,
        ref:"DemandeService",
        required:true
    }
},{timestamps:true});
    
const Proposition=mongoose.model('Proposition',PropositionSchema);
module.exports=Proposition; 