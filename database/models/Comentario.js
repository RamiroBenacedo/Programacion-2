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
        },
        idUsuario: {
            type: dataTypes.INTEGER,
        },
        campoTextoNombreImg: {
            type: dataTypes.STRING,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        }}
     

     let config = {
        tableName:"tabladecomentario", timestamps: true, underscore: false
     }

     let Comentario = sequelize.define(alias, cols, config);
      //relaciones
    // muchos comentarios pertenecen a un posteo 
    Comentario.associate= function(models){
        Comentario.belongsTo(models.Posteo, {
            as: "comentarioPosteo", 
            foreignKey: "idPost",
        }),
    //muchos comentarios pertenecen a un usuario
    Comentario.belongsTo(models.Usuario, {
        as: "comentarioUsuario",
        foreignKey: "idUsuario",
        onDelete: "cascade"
         })
        }
     return Comentario;
    }