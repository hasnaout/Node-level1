const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CompretenceSchema=new Schema ({
    description:String
});

const Competence=mongoose.model("Competence",CompretenceSchema);
module.exports=Competence;