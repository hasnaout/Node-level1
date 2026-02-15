const Proposition = require('../models/Proposition');
//create Proposition
exports.createProposition=async(req,res)=>{
    try {
        const proposition=new Proposition(req.body);
        await proposition.save();
        res.status(201).json(proposition);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}