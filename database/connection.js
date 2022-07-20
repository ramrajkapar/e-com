const mongoose = require('mongoose');

//Database connection

const connectionDatabase = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/e-comm');
        console.log('Database connected successfully');
    }catch(error){
        console.log("Error occurs");
    }
    
};

module.exports = connectionDatabase;