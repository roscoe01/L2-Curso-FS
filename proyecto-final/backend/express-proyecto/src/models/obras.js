const mongoose = require("mongoose");

const obrasSchema = mongoose.Schema(
    {
        nombre:{
            type: String,
            required : true
        },
        descripcion:{
            type: String,
            required : true
        },
        tamaño:{
            type: String,
            required : false
        },
        img:{
            type: String,
            required : false
        },
        año:{
            type: String,
            required : false
        },
        coleccion:{
            type: String,
            required : false
        },
    });

module.exports = mongoose.model("Obras",obrasSchema);