import { Schema, mode } from "mongoose";

const comanda = new Schema({
    mesa: {type: String, required: true},
    pratos: [{type: Schema.Types.ObjectId, ref: 'Pratos'}]
})