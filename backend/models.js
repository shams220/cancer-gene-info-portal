const mongoose = require("mongoose");

const GeneSchema = new mongoose.Schema({
  gene: String,
  cancers: Array
});

const CancerSchema = new mongoose.Schema({
  cancer_type: String,
  genes: Array
});

module.exports = {
  Gene: mongoose.model("genes", GeneSchema),
  Cancer: mongoose.model("cancers", CancerSchema)
};
