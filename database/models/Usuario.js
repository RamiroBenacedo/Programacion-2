module.exports = function(sequelize, dataTypes){
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING,
            unique: true
        },
        nombreUsuario: {
            type: dataTypes.STRING,
            unique: true
        },
        clave: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE,
            AllowNull: true
        },
        updatedAt: {
            type: dataTypes.DATE,
            AllowNull: true
        },
        deletedAt: {
            type: dataTypes.DATE,
            AllowNull: true
        }
     }

     let config = {
        tableName:"usuario", timestamps: true, underscore: true
     }

     let Usuario = sequalize.define(alias, cols, config);
      //relaciones
    // Un usuario tiene muchos posteos 
    Usuario.associate= function(models){
        Usuario.hasMany(models.Posteo, {
            as: "usuarioPosteo", 
            foreignKey: "idusuario",
        }),
    //Un posteo tiene muchos comentarios
    Usuario.hasMany(models.Comentario, {
        as: "usuarioComentarios",
        foreignKey: "idusuario",

         })
        }
     return Usuario;
}