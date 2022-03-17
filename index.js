const express = require("express");
const app = express();


app.set("view engine", "ejs");

app.get("/rota2", (req,res) => {

    res.render("index")
})

let port = 3000

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
