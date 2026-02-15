const Client=require('../models/Client');

//create Client
exports.createClient=async(req, res)=>{
    try {
        const client=new Client(req.body);
        await client.save();
        res.status(201).json(client);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.getAllClients = async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
};
exports.getClientById = async (req, res) => {
    try {   
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Ce client n\'existe pas' });
        }
        res.json(client);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }   
};
exports.updateClientById = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body
, { new: true });
        if (!client) {
            return res.status(404).json({ error: 'Ce client n\'existe pas' });
        }       
        res.json(client);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.deleteClientById = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);   
        if (!client) {
            return res.status(404).json({ error: 'Ce client n\'existe pas' });
        }   
        res.json({ message: 'Client supprimé avec succès' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }   
};
