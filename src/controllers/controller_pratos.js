import { PratosModel } from "../models/model_pratos.js"

const buscarPratos = async (req,res) => {
    const dados = await PratosModel.find()
    res.json(dados)
}

const addPratos = (req,res) => {
    const {nome, preco} =  req.body
    const novoPrato = new PratosModel({nome, preco})
    novoPrato.save().then(
        res.status(201).send("Prato criado")
    ).catch(
        res.send("Erro ao criar prato")
    )
    res.send("Criar Pratos")
}

const buscarPratoPorID = async(req, res) => {
    const {id} = req.params
    const dados = await PratosModel.findById(id)
    res.json({
        erro: false,
        dados: dados
    })
}

export {addPratos, buscarPratos, buscarPratoPorID}