const {Pirate} = require('../models/pirate.model')

module.exports.createPirate = (request, response) => {

    Pirate.create(request.body)
        .then(pirate => { console.log("success"); response.json(pirate)})
        .catch(err => response.status(400).json(err));
}

module.exports.getPirates = (request, response) => {
    Pirate.find({}).sort({name:1})
        .then(pirates => response.json(pirates))
        .catch(err => response.json(err))
}

module.exports.deletePirate = (request, response) => {
    Pirate.findByIdAndDelete(request.params.id)
    .then(() => response.json({status: 'success'}))
    .catch(err => response.json(err))
}

module.exports.getPirate = (request, response) => {
    Pirate.findById(request.params.id)
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err))
}

module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPirate => response.json(updatedPirate))
        .catch(err => response.json(err))
}


