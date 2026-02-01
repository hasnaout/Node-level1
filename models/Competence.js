const { model } = require("mongoose");

const mongoose=required("mongoose");
 
const Schema=mongoose.Schema;

const CompretenceSchema=new Schema ({
    description:String
});

const CompetenceModel=mongoose.model("Competence",CompretenceSchema);

model.exports=CompetenceModel;