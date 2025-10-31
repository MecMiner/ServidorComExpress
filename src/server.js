import express from "express"
import mongoose from "mongoose"
import { PratosRouter } from "./routes/route_pratos.js"
const app = express()
app.use(express.json())

//CRUD -> Create, Read, Update, Delete
app.use("/pratos", PratosRouter)


mongoose.connect("mongodb://localhost:27017/restaurante")
    .then(() => console.log("Conectado ao banco"))
    .catch( error => console.log("Error: ", error))

app.listen(3333, () => {
    console.log("Servidor rodando na porta em http://localhost:3333")
})
