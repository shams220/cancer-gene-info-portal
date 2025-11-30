const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alamziyafzd:AlamZia123@biotech-app.kovhftk.mongodb.net/cancerDB?retryWrites=true&w=majority"
    );
    console.log("MongoDB Connected! 🚀");
  } catch (err) {
    console.error("MongoDB Error ❌", err);
  }
};

module.exports = connectDB;
