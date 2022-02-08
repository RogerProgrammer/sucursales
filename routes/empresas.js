const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares');

const { crearEmpresa } = require('../controllers/empresas');

const router = Router();

    router.post('/',[
        check('razon_social').not().isEmpty(),
        check('nit').not().isEmpty(),
        check('email').not().isEmpty(),
        check('password').not().isEmpty(),
        validarCampos
    ], crearEmpresa)

module.exports = router;