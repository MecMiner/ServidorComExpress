import { Schema, model } from "mongoose";

const pratos = new Schema({
    nome: {type: String, required: true},
    preco: {type: Number, required: true}
})

const PratosModel = model('Pratos', pratos)
export {PratosModel}