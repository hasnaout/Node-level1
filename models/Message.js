const mongoose=require('mongoose');
const Schema=mongoose.Schema;   

const MessageSchema=new Schema({
    contenu:String,
    date_envoi:Date,
    lu:Boolean,
    Expediteur :{
        type:Schema.Types.ObjectId,
        ref:"Client"
    },
    Destinataire :{
        type:Schema.Types.ObjectId,
        ref:"Prestataire"
    }
},{timestamps:true});   

const Message=mongoose.model('Message',MessageSchema);
module.exports=Message;