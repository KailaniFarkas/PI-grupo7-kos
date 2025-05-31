module.exports = function (sequelize, dataTypes ) {

    let alias = "Producto";

    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        imagen_archivo: {
            type: dataTypes.STRING,
        },
        nombre_producto: {
            type: dataTypes.STRING,
        },
        descripcion: {
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
        usuario_id: {
            type: dataTypes.INTEGER,
        }
    };

    let config = {
        tableName: "productos",
        timestamps: true, 
        underscored: true, 
    };

    let Producto= sequelize.define (alias, columnas, config);

    Producto.associate = function (models) { 
        Producto.belongsTo(models.Usuario, {foreignKey: "usuario_id", as: "usuario"});
        Producto.hasMany(models.Comentario, { foreignKey: "producto_id", as: "comentarios" });
    };
    
    return Producto;

}