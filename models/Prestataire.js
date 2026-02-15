const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const PrestataireSchema = new Schema({
    nom: String,
    prenom: String,
    email: { type: String, unique: true },
    telephone: String,
    zone_geographique: String,
    tarif_horaire: Number,
    disponible: Boolean,
    description: String,
    Competence: [{ 
        type: Schema.Types.ObjectId,
         ref: "Competence" }]
    }, { timestamps: true });

const Prestataire=mongoose.model("Prestataire", PrestataireSchema);
module.exports = Prestataire;