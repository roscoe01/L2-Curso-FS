const models = require("../models");
const mongoose = require("mongoose");


const objectIdValidator = mongoose.Types.ObjectId;

const getObras = async (req,res) => {
    try{
        const response = await models.Obras.find();

        return res.status(200).json({
            data: response,
            error: false,
        });
        
    } catch(error){
        return res.status(500).json({
            message: error,
            error: true,
        });
    }
};

const getObraById = async (req,res) =>{
    try{
        const obraId = req.params.id;
        const isValid = objectIdValidator.isValid(obraId);

        if(!isValid){
            return res.status(200).json({
                msg: "El ID ingresado no corresponde a un ID de MongoDB",
                error: true,
            });
        } 
        const response = await models.Obras.findById(obraId);

        if(response){
            res.status(200).json({
                data: response,
                error: false,
            })
        } else{
            res.status(404).json({
                msg: `La obra con id ${obraId} no existe`,
                error: true,
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error,
            error: true,
    });
}
};

const addObra = async (req, res) => {
    try {
      const nombre = req.body.nombre;
      const descripcion = req.body.descripcion;
  
      if (!nombre) {
        return res.status(400).json({
          error: true,
          msg: "La obra que desea añadir requiere un nombre. Ingrese un nombre.",
        });
      }
  
      if (!descripcion) {
        return res.status(400).json({
          error: true,
          msg: "La obra que desea añadir requiere una descripción. Ingrese una descripción.",
        });
      }
  
      const obra = new models.Obras(req.body);
      await obra.save();
      res.status(200).json({
        data: personaje,
        error: false,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error,
        error: true,
      });
    }
  };

const updateObra = async (req, res) => {
    try {
      const obraId = req.params.id;
  
      const obra = await models.Obras.findByIdAndUpdate(
        obraId,
        req.body,
        { new: true }
      );
  
      if (obra) {
        res.status(200).json({
          error: false,
          data: obra,
        });
      } else {
        res.status(404).json({
          error: true,
          msg: "La obra ingresada no existe",
        });
      }
    } catch (error) {
      return res.status(500).json({
        msg: error,
        error: true,
      });
    }
  };



const deleteObra = async (req, res) => {
    try {
      const obraId = req.params.id;
  
      const response = await models.Obras.findByIdAndRemove(obraId);
  
      if (response) {
        res.status(200).json({
          error: false,
          data: response,
          msg: `La obra fue eliminada con exito`,
        });
      } else {
        res.status(400).json({
          error: true,
          msg: "La obra ingresada no existe",
        });
      }
    } catch (error) {
      return res.status(500).json({
        msg: error,
        error: true,
      });
    }
  };  



module.exports={
    getObras,
    getObraById,
    addObra,
    updateObra,
    deleteObra
};