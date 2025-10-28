const express = require("express");
const router = express.router();
const usuariosController = require('../controllers/usuariosController');


router.get("/", usuariosController.index);
router.get('/login', usuariosController.formulario);
router.post("/login", usuariosController.login);
