const express = require("express") 
const filmesJSON = require("./data/filmes.json")
const usuarioJSON = require("./data/usuario.json")
const jogosJSON = require("./data/jogos.json")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.status(200).json({
        msg: "Hello World"
    })
})


app.get("/filmes", (req, res) => {
    return res.status(200).json({
        filmes: filmesJSON
    })
})

app.get("/jogos", (req, res) => {
    return res.status(200).json({
        jogos: jogosJSON
    })
})

app.get("/usuario", (req, res) => {
    return res.status(200).json({
        usuario: usuarioJSON
    })
})

app.listen(3000, () => {
    console.log("Servidor rodando");
})