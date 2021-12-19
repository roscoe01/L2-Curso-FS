const express = require("express");
const router = express.Router();
const obrasController = require("../controllers/obrasController");

router.get('/',obrasController.getObras);
router.get('/:id',obrasController.getObraById);
router.post('/',obrasController.addObra);
router.put('/:id',obrasController.updateObra);
router.delete('/:id',obrasController.deleteObra);


module.exports = router;