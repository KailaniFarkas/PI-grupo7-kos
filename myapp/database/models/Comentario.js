module.exports = function (sequelize, dataTypes ) {

    let alias = "Comentario";

    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        texto_comentario: {
            type: dataTypes.TEXT,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        },
        id_post: {
            type: dataTypes.INTEGER,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
    };

    let config = {
        tableName: "comentarios",
        timestamps: true, 
        underscored: true, 
    };

    let Comentario= sequelize.define (alias, columnas, config);

    Comentario.associate = function (models) { 
        Comentario.belongsTo(models.Producto, {foreignKey: "producto_id", as: "producto"});
        Comentario.belongsTo(models.Usuario, {foreignKey: "usuario_id", as: "usuario"});
    };

    return Comentario;
}