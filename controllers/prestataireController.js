const Prestataire=require("../models/Client");

//create Prestataire
exports.createPrestataire=async(req,res)=>{
    try{
        const prestataire=new Prestataire(req.body);
        await prestataire.save();
        res.status(201).json(prestataire);
    } catch(err){
        res.status(400).json({error: err.message});
    }
}