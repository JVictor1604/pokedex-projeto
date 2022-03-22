const { __express } = require("ejs");
const express = require("express");
const path = require("path");
const app = express();

let port = 3001;

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"public")));


app.get("/", (req,res) => {

    res.render("index",{pokedex})
});

app.get("/detalhes", (req,res) => {

    const pokemonAtual = pokedex.filter((numPokemon)=> numPokemon.id == req.params.id)

    res.render('detalhes.ejs', {
        pokemonAtual
    })
});



const pokedex = [

    {
        id: "004",

        nome: "Charmander",

        número: "4",

        altura: "0.6 m",

        peso: "8,5 kg",

        tipo: "Fire",

        categoria: "flame",

        habilidade: "Blaze",

        descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",

        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"

    },

    {
        id: "468",

        nome: "Togekiss",

        número: "468",

        altura: "1.5 m",

        peso: "38 kg",
        
        tipo: "fairy",

        habilidade: "Hustle",

        categoria: "Jubilee",

        descricao: "These Pokémon are never seen anywhere near conflict or turmoil. In recent times.",

        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/468.png"

    },

    {
        id: "025",

        nome: "Pikachu",

        número: "25",

        altura: "0.4 m",

        peso: "6 kg",
        
        tipo: "Eletric",

        habilidade: "Static",

        descricao: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",

        tipo: "eletric",

        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"

    }
];
