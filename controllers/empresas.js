const { response } = require('express');

const crearEmpresa = (req, res = response ) => {

    console.log(req.body);

    res.status(200).json({
        status: "ok",
        msg: req.body
    })

}

module.exports = {
    crearEmpresa
}