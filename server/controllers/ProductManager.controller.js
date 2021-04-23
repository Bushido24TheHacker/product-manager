const Product = require("../models/ProductManager.js");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then(allDaProducts => res.json(allDaProducts))
    .catch(err => res.json(err));
};

module.exports.findOneSingleProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then(oneSingleProduct => res.json(oneSingleProduct))
    .catch(err => res.json(err));
};

module.exports.createNewProduct = (req, res) => {
  console.log("CREATENEWPRODUCT");
  Product.create(req.body)
    .then(newlyCreatedProduct => res.json(newlyCreatedProduct))
    .catch(err => res.status(400).json(err));
};

module.exports.updateExistingProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.status(400).json(err));
};

module.exports.deleteAnExistingProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
};
