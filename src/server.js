import express from "express"
import { Database } from "./databases.js"
import {randomUUID} from "node:crypto"
const app = express()
app.use(express.json())

const database = new Database()

app.get('/', (req, res) => {
    res.send("Você está na página principal")
})

app.get('/usuario', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    const {id} = req.params
    const data = database.select("usuario")
    res.status(200).json(data)
})
//http://localhost:3333/usuario/elonmusk
app.get('/usuario/:id', (req, res) => {
    const {id} = req.params
    const data = database.selectItem("usuario", id)
    res.status(200).json(data)
})

app.delete('/usuario/:id', (req, res) => {
    const {id} = req.params
    const result = database.delete("usuario", id)
    res.status(200).json(result)
})

app.put('/usuario/:id', (req, res) => {
    const {nome, idade, email} = req.body
    const {id} = req.params
    const result = database.update("usuario", id, {id, nome, idade, email})
    res.status(200).json(result)
})



app.post('/usuario', (req, res)=> {
    const {nome, idade, email} = req.body
    const id = randomUUID()
    if(nome, idade, email){
        database.insert("usuario", {id, nome, idade, email})
        return res.status(201).send("Usuário Criado")   
    }
    return res.status(400).send("Informações inválidas")
})



app.listen(3333, () => {
    console.log("Servidor rodando na porta em http://localhost:3333")
})
