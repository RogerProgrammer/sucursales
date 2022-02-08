const { Datatypes } = require('sequelize');

const { db } = require('../database/config');

const Empresa = db.define('Empresa', {
    id: {
        type: Datatypes.INTEGER
    },
    razon_social: {
        type: Datatypes.STRING
    },
    nit: {
        type: Datatypes.STRING
    },
    email: {
        type: Datatypes.STRING
    },
    password: {
        type: Datatypes.STRING
    },
    estado: {
        type: Datatypes.BOOLEAN
    },
    updated_at: {
        type: Datatypes.DATE
    },
    created_at: {
        type: Datatypes.DATE
    }
});

module.exports = {
    Empresa
};