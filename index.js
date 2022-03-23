const { __express } = require("ejs");
const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const app = express();

let port = 3001;

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());

//Rotas

let pokemon = undefined;

app.get("/", (req,res) => {

    res.render("index",{pokedex, pokemon});
})

app.get("/detalhes/:id", (req,res) => {

    const id = Number(req.params.id);

    pokemon = pokedex.find(pokemon => pokemon.id === id );

    res.render('detalhes.ejs', {
        pokemon
    })
})

app.post("/uptade/:id", (req,res) => {

    const id = Number(req.params.id);

    pokemon = pokedex.find(pokemon => pokemon.id === id );

    const newPokemon = req.body;

    newPokemon.id = id;

    pokedex[id - 1] = newPokemon;
    
    pokemon = undefined;

    res.redirect("/")
})

app.post("/add", (req,res) => {

    const adicionarPokemon = req.body;

    adicionarPokemon.id = pokedex.length + 1;

    pokedex.push(adicionarPokemon);

    res.redirect("/");

})



const pokedex = [

    {
        id: 1,

        nome: "Charmander",

        num: "4",

        altura: "0.6 m",

        peso: "8,5 kg",

        tipo: "Fire",

        categoria: "flame",

        habilidade: "Blaze",

        descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",

        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"

    },

    {
        id: 2,

        nome: "Togekiss",

        num: "468",

        altura: "1.5 m",

        peso: "38 kg",
        
        tipo: "fairy",

        habilidade: "Hustle",

        categoria: "Jubilee",

        descricao: "These Pokémon are never seen anywhere near conflict or turmoil. In recent times.",

        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/468.png"

    },

    {
        id: 3,

        nome: "Pikachu",

        num: "25",

        altura: "0.4 m",

        peso: "6 kg",
        
        tipo: "Eletric",

        habilidade: "Static",

        categoria: "Mouse",

        descricao: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",

        tipo: "eletric",

        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"

    }
];
