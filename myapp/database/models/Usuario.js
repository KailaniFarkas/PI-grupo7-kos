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
        }
      
        
    };

    let config = {
        tableName: "usuarios",
        timestamps: false, 
        underscored: true, 
    };

    let Usuario= sequelize.define (alias, columnas, config);

    Usuario.associate = function (models) { 
        Usuario.hasMany(models.Producto,{foreignKey:"usuario_id", as:"productos"});
        Usuario.hasMany(models.Comentario, {foreignKey: "usuario_id", as: "comentarios"});

    };

    return Usuario;
}