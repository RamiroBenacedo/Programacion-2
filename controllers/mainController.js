const datos = require("../db/data");
const db= require("../database/models")
const mainController = {
  index: function (req, res, next) {
    db.Posteo.findAll({
      include: [
       {association: "posteoUsuarios"},
        
        {association: "posteoComentarios"    }
  ],
      order: [['createdAt', 'DESC']]
    })
    .then((data) => {
      /* res.render('index', {posteos: data}) */
      return res.send(data)
    })
    .catch((error) =>{
      return res.send({data:error});
    })
  },

  /* login: function (req, res) {
    if(req.session.Usuario!= undefined){
      return res.redirect("/")
    }
    else{
      return res.render('login', {mensaje: ""})
    }
  }, */

  registro: function (req, res) {
    let error = ""
    res.render("registro", {error:error})
  },

  /* logout: function (req, res) {
    req.session.destroy()
    res.clearCookie("cookieUsuario")
    return res.redirect("/")
  } */
};

module.exports = mainController;