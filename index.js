const express = require("express");
const app = express();

const pokedex = [

    {
        id: 4,

        nome: "Charmander",

        descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",

        tipo: "Fire",

        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"

    },

    {
        id: 468,

        nome: "Togekiss",

        descricao: "These Pokémon are never seen anywhere near conflict or turmoil. In recent times, they ve hardly been seen at all.",

        tipo: "fairy",

        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/468.png"

    },

    {
        id: 25,

        nome: "Pikachu",

        descricao: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",

        tipo: "eletric",

        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"

    }
]

app.set("view engine", "ejs");

app.get("/", (req,res) => {

    res.render("index",{pokedex})
})

let port = 3000
''
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));
