const express = require("express");
const connectDB = require("./db");
const { Gene, Cancer } = require("./models");

const app = express();
connectDB();

app.get("/api/search", async (req, res) => {
  const q = (req.query.q || "").trim().toLowerCase();
  if (!q) return res.json({ results: [] });

  const geneMatches = await Gene.find({ gene: { $regex: q, $options: "i" } }).limit(20);
  if (geneMatches.length > 0) {
    return res.json({ type: "gene", results: geneMatches });
  }

  const cancerMatches = await Cancer.find({ cancer_type: { $regex: q, $options: "i" } }).limit(20);
  if (cancerMatches.length > 0) {
    return res.json({ type: "cancer", results: cancerMatches });
  }

  res.json({ results: [] });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000 🚀"));
