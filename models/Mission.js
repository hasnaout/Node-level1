const mongoose=require('mongoose');
const Schema=mongoose.Schema;       

const MissionSchema=new Schema({
    date_debut:Date,
    date_fin:Date,
    prix_final:Number,
    statut:String,

    Proposition :{
        type:Schema.Types.ObjectId,
        ref:"Proposition"
    }
},{timestamps:true});
    
const MissionModel=mongoose.model('Mission',MissionSchema); 
module.exports=MissionModel;