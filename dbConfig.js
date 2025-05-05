const mongoose = require("mongoose");
require("dotenv").config();

// Configuração da conexão com MongoDB Atlas
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
        });
        console.info("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

  
module.exports = connection;