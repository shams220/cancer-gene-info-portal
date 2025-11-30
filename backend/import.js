const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const { Gene, Cancer } = require("./models");
const connectDB = require("./db");

const genesFile = path.join(__dirname, "data", "genes_to_cancers.json");
const cancersFile = path.join(__dirname, "data", "cancers_to_genes.json");

const importData = async () => {
  try {
    await connectDB();
    console.log("DB Connected for Import ✔");

    const genesData = JSON.parse(fs.readFileSync(genesFile, "utf-8"));
    const cancersData = JSON.parse(fs.readFileSync(cancersFile, "utf-8"));

    await Gene.deleteMany({});
    await Cancer.deleteMany({});

    console.log("Old data cleared!");

    const geneDocs = Object.keys(genesData).map((gene) => ({
      gene,
      cancers: genesData[gene],
    }));

    const cancerDocs = Object.keys(cancersData).map((cancer_type) => ({
      cancer_type,
      genes: cancersData[cancer_type],
    }));

    await Gene.insertMany(geneDocs);
    await Cancer.insertMany(cancerDocs);

    console.log("🎉 Data Import Completed Successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Import Error ❌", err);
    process.exit(1);
  }
};



importData();
console.log("Genes inserted:", await Gene.countDocuments());
console.log("Cancers inserted:", await Cancer.countDocuments());

