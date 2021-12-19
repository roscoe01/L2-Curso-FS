const express = require("express");
const obrasRouter = require("./obrasRouter");

const router = express.Router();

router.use("/obras", obrasRouter);

module.exports = router;