const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Pirate name is required"] },
    img: { type: String, required: [true, "Pirate image URL is required"] },
    numtreasure: { type: Number, required: [true, "Number of treasure chests is required"] },
    catchphrase: { type: String, required: [true, "Catch phrase is required"] },
    position: { type: String, required: [true, "Crew Position is required"] },
    pegleg: {type: Boolean},
    eyepatch: {type: Boolean},
    hookhand: {type: Boolean}   
}, { timestamps: true });

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);