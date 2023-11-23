const db= require("../database/models")
const bcrypt = require('bcryptjs');


const mainController = {
  index: function (req, res) {
    db.Posteo.findAll({
      include: [
       {association: "posteoUsuarios"},
        
        {association: "posteoComentarios"}
  ],
      order: [['createdAt', 'DESC']]
    })
    .then((data) => {
       res.render('index', {posteos: data})
    })
    .catch((error) =>{
      return res.send({data:error});
    })},

  
  login: function (req, res) {
      return res.render("login")
    },


  loginPost: (req, res) => {
    let emailBuscado = req.body.email;
    let contrasena = req.body.contrasena;   
/*     res.send(contrasena)
 */    let rememberMe=req.body.rememberMe;      
    
    let errors = {}
    if (emailBuscado == ''){
      errors.message ="El email esta vacio"
      res.locals.errors = errors;
      return res.render('login')
    }
    else if (contrasena == "") {
      errors.message = "El campo de contraseña esta vacio";
      res.locals.errors = errors;
      return res.render("login");
    } else {
        let criterio = {
        where: [{email: emailBuscado}]
    };


    db.Usuario.findOne(criterio)
    .then((result) => {
      if (result != null) {
      let check = bcrypt.compareSync(contrasena, result.contrasena)
/*    res.send(check)
 */              
      if (check) {
        req.session.user = result.dataValues;
/*          console.log(req.session.user)
 */ 
        if (rememberMe) {
        res.cookie('userId', result.id, {maxAge:1000 * 60 * 5}) 
        }
        return res.redirect("/")}
        else {
          errors.message = "La contraseña es incorrecta";
          res.locals.errors = errors;
          return res.render("login")
        }} 
        else {
          errors.message = "No existe el mail " + emailBuscado;
          res.locals.errors = errors
          res.render('login')
          }
          
      }).catch((error) => {
          return res.send(error);
      })}},
  

  logout: function (req, res) {
    req.session.destroy()
    res.clearCookie("userId")
    return res.redirect("/")
    },

  
  registro: function (req, res) {
    res.render("registro")
  },


  store: function(req, res){
    let info = req.body;
     /* res.send(info) */
     let errors = {}
    if (info.email == ""){
      errors.message = 'El email esta vacio'
      res.locals.errors = errors;
      res.render('registro')
    } 
    else if (info.contrasena == ""){
      errors.message = 'La contrasena esta vacia'
      res.locals.errors = errors;
      res.render('registro')
    }
    else if (info.contrasena.length < 3){
        errors.message = 'La contrasena debe tener mas de 3 caracteres'
        res.locals.errors = errors;
        res.render('registro')
    }
    else if (info.nombre == ""){
        errors.message = 'Debes tener un nombre de usuario'
        res.locals.errors = errors;
        res.render('registro')
    }
    else if (info.nombre.length < 4){
      errors.message = 'Tu nombre debe tener mas de 4 caracteres'
      res.locals.errors = errors;
      res.render('registro')
  }
  else if (info.fecha_nacimiento == ""){
    errors.message = 'Debes poner tu fecha de nacimiento'
    res.locals.errors = errors;
    res.render('registro')
}
else if (info.foto_de_perfil == ""){
  errors.message = 'Debes poner la URL de tu foto de perfil'
  res.locals.errors = errors;
  res.render('registro')
}
else if (info.dni == ""){
  errors.message = 'Debes poner tu DNI'
  res.locals.errors = errors;
  res.render('registro')
}
else{ 
  db.Usuario.findOne({where:[{email: info.email}]})
  .then(function (result) {
    console.log(result);
    if (result != undefined) {
      errors.message = "El email ingresado ya esta registrado";
      res.locals.errors = errors;
      return res.render("registro");
    }
    else{
      let usuario = {
      contrasena: bcrypt.hashSync(info.contrasena, 10),
      email: info.email,
      nombre: info.nombre,
      foto_de_perfil: info.foto_de_perfil,
      fecha_nacimiento: info.fecha_nacimiento,
      dni: info.dni,
      remember_token: "false"
    }
    db.Usuario.create(usuario)
    .then((result) => {
      return res.redirect('/login')
   })
    .catch((error)=> {
      let errors = {};
      console.log(error);
      errors.message = "El campo email esta repetido";
      res.locals.errors = errors;
      return res.redirect("registro")
    });
  }
  })
  }},
  busqueda: function (req, res) {
    let busqueda = req.query.busqueda;
    let filtro = {
      limit: 10,
      order: [['createdAt', 'DESC']],
      where: [
        { textoPost: { [db.Sequelize.Op.like]: `%${busqueda}%` } }
      ],
      include: {
        all: true,
        nested: true
      }
    }
    posts.findAll(filtro)
      .then(function (results) {
        //res.send(results)
        return res.render("resultadoBusqueda", { posts: results, criterio: busqueda })
      })
      .catch(function (error) {
        res.send(error)
      })
  },

};
module.exports = mainController;