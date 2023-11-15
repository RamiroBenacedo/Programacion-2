module.exports = function(sequelize, dataTypes){
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        contrasena: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING,
            unique: true
        },
        nombre: {
            type: dataTypes.STRING,
            unique: true
        },
        foto_de_perfil: {
            type: dataTypes.STRING
        },
        fecha_nacimiento: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        }
     }

     let config = {
        tableName:"Usuario", timestamps: true, underscore: true
     }

     let Usuario = sequelize.define(alias, cols, config);
      //relaciones
    // Un usuario tiene muchos posteos 
    Usuario.associate= function(models){
        Usuario.hasMany(models.Posteo, {
            as: "usuarioPosteo", 
            foreignKey: "clienteId",
        }),
    //Un posteo tiene muchos comentarios
    Usuario.hasMany(models.Comentario, {
        as: "usuarioComentarios",
        foreignKey: "idusuario",

         })
        }
     return Usuario;
}