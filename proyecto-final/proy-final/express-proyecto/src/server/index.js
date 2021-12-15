const express = require("express");
const obras = require("../data/obras.json")

const app=express();
const PORT = 3000;

const mappedObras = obras.map((item) => {
    return {
        ...item,
        img: `http://localhost:${PORT}/${item.img}`
    };
});
 


app.use(express.static("public"));


// ---- Recurso OBRA ---- //


// METODO GET de OBRAS //
app.get("/obras", (req,res) => {
    res.status(200).send(mappedObras);
})

// METODO GET de OBRAS por ID //

app.get("/obras/:id", (req,res) => {
    const obra = mappedObras.find((item) => item.id === req.params.id);

    if(obra) {
        res.status(200).send(obra);
    } else {
        res.status(404).send(`No se pudo encontrar la obra con ID ${req.params.id}`);
}
    

});

app.listen(PORT, ()=> {
    console.log(`Running on port ${PORT}`);
})