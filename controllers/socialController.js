const datos = require("../db/data")

const socialController = {
    index: function (req, res) {
        return res.render ('index', {lista: datos.usuarios})
    },

}

module.exports = socialController