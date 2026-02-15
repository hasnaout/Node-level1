const Demande=require("../models/DemandeService");

//create DemandeService
exports.createDemandeService=async(req, res)=>{
    try {
        const demandeService=new Demande(req.body);
        await demandeService.save();
        res.json(demandeService);
    } catch(err){
        res.status(400).json({error: err.message});
    }
}