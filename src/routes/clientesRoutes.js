import express from "express";
import ClienteController from "../controllers/clienteController.js";

const routes = express.Router();

routes.get("/clientes", ClienteController.listarClientes);
routes.post("/clientes", ClienteController.cadastrarCliente);
routes.put("/clientes/:id", ClienteController.atualizarCliente);
routes.delete("/clientes/:id", ClienteController.excluirCliente);

export default routes;