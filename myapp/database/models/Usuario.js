module.exports = function (sequelize, dataTypes ) {

    let alias = "Usuario";

    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING,
        },
        contrasena: {
            type: dataTypes.STRING,
        },
        fecha: {
            type: dataTypes.DATE,
        },
        username: {
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
        }
      
        
    };

    let config = {
        tableName: "usuarios",
        timestamps: true, 
        underscored: false, 
    };

    let Usuario= sequelize.define (alias, columnas, config);

    Usuario.associate = function (models) { 
        Usuario.hasMany(models.Producto,{foreignKey:"usuario_id", as:"productos"});
        Usuario.hasMany(models.Comentario, {foreignKey: "usuario_id", as: "comentarios"});

    };

    return Usuario;
}