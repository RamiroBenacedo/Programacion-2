module.exports = function(sequelize, dataTypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idPost: {
            type: dataTypes.INTEGER,
            unique: true
        },
        idUsuario: {
            type: dataTypes.INTEGER,
            unique: true
        },
        nombre: {
            type: dataTypes.STRING,
            unique: true
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },
        textoComentario: {
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
        }}
     

     let config = {
        tableName:"tabladecomentario", timestamps: true, underscore: true
     }

     let Comentario = sequelize.define(alias, cols, config);
      //relaciones
    // muchos comentarios pertenecen a un posteo 
    Comentario.associate= function(models){
        Comentario.belongsTo(models.Posteo, {
            as: "comentarioPosteo", 
            foreignKey: "clienteId",
        }),
    //muchos comentarios pertenecen a un usuario
    Comentario.hasMany(models.Comentario, {
        as: "comentarioUsuario",
        foreignKey: "idusuario",
        onDelete: "cascade"
         })
        }
     return Comentario;
    }