const db= require("../database/models")
const bcrypt = require('bcryptjs');


const mainController = {
  index: function (req, res, next) {
    db.Posteo.findAll({
      include: [
       {association: "posteoUsuarios"},
        
        {association: "posteoComentarios"}
  ],
      order: [['createdAt', 'DESC']]
    })
    .then((data) => {
/*       res.send(data)
 */       res.render('index', {posteos: data})
    })
    .catch((error) =>{
      return res.send({data:error});
    })},
  
  login: function (req, res) {
      return res.render("login")
    },

  loginPost: (req, res) => {
    let emailBuscado = req.body.email;
    let pass = req.body.contrasena;         
    
    let errores = {}
    if (emailBuscado == ''){
      errores.message("El email esta vacio")
      res.locals.errors = errors;
      return res.render('login')
    }
    else if (req.body.pass == "") {
      errors.message = "El campo de contraseña esta vacio";
      res.locals.errors = errors;
      return res.render("login");
    } else {
        let criterio = {
        where: [{email: emailBuscado}]
    }};


    db.Usuario.findOne(criterio)
    .then((result) => {
      if (result != null) {
        let check = bcrypt.compareSync(contrasena, result.contrasena)
              
      if (check) {
        return res.redirect("/")} 
        else {
        return res.render("login")
        }} else {
          return res.send("No existe el mail " + emailBuscado)
          }
          
      }).catch((error) => {
          return res.send(error);
      })},
  

  registro: function (req, res) {
    let error = ""
    res.render("registro", {error:error})
  },

  logout: function (req, res) {
    req.session.destroy()
    res.clearCookie("cookieUsuario")
    return res.redirect("/")
  },
  
  store: (req, res) => {
    let info = req.body;               
    let usuario = {
        name: info.nombre,
        email: info.email,
        password: bcrypt.hashSync(info.contrasena, 10),
        remember_token: "false"
    };

    db.Usuario.create(usuario)
    .then((result) => {
        return res.redirect("/login");
    }).catch((error) => {
        return console.log(error);
    });
},
};

module.exports = mainController;