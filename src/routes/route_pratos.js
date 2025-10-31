import { Router } from "express";
import { addPratos, buscarPratoPorID, buscarPratos } from "../controllers/controller_pratos.js";
const PratosRouter = Router()

PratosRouter.get("/", buscarPratos)
PratosRouter.get("/:id", buscarPratoPorID)
PratosRouter.post("/", addPratos)
PratosRouter.put("/", (req,res) => {
    res.send("Alterar Pratos")
})

PratosRouter.delete("/", (req,res) => {
    res.send("Deletar Pratos")
})

export {PratosRouter}