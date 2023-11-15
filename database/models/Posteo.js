module.exports = function (sequelize, dataTypes) {
    let alias = "Posteo";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        clienteId: {
            type: dataTypes.INTEGER,
            unique: true
        },
        nombreUsuario: {
            type: dataTypes.STRING,
            unique: true
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },
        nombreImg: {
            type: dataTypes.STRING
        },
        textonombre: {
            type: dataTypes.STRING
        },
        textoposteo: {
            type: dataTypes.STRING
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
        tableName: "posteosUsuario", timestamps: true, underscore: true
    }

    let Posteo = sequelize.define(alias, cols, config);
    //relaciones
    // Un posteo pertenece a un usuario 
    Posteo.associate = function (models) {
        Posteo.belongsTo(models.Usuario, {
            as: "posteoUsuarios",
            foreignKey: "clienteId",
        }),
            //Un posteo tiene muchos comentarios
            Posteo.hasMany(models.Comentario, {
                as: "posteoComentarios",
                foreignKey: "idPost",

            })
    }
    return Posteo;
}