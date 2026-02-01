const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const AvisSchema=new Schema({
    note: Number,
    commentaire: String,
    date_envoi: Date,
    Client: {
        type:Schema.Types.ObjectId,
        ref:"Client",   
        required:true
    },
    Prestataire: {
        type:Schema.Types.ObjectId,
        ref:"Prestataire",   
        required:true
    },
    Mission: {
        type:Schema.Types.ObjectId,
        ref:"Mission",   
        required:true
    }
},{timestamps:true});

const AvisModel=mongoose.model('Avis',AvisSchema);
module.exports=AvisModel;
  