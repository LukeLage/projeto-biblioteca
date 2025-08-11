import express from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';
import clientes from './clientesRoutes.js';

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send ("Curso de Node.js com Express API");
    });

    app.use(express.json(), livros, autores, clientes);
}

export default routes;