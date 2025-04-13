const db = require('../db/usuarios');

const userController = {
    login: function (req, res) {
        //  renderiza nomas
        return res.render('login');
    },

    perfil: function (req, res) {
        const emailBuscado = req.params.email;
        const listaUsuarios = db.usuarios;

        let usuarioEncontrado = null;

        for (let i = 0; i < listaUsuarios.length; i++) {
            const usuario = listaUsuarios[i];
            if (usuario.email === emailBuscado) {
              usuarioEncontrado = usuario;
            }
          }
          

        if (usuarioEncontrado) {
            const nombre = usuarioEncontrado.nombre;
            const ft = usuarioEncontrado.fotoPerfil;
            const mail = usuarioEncontrado.email;

            return res.render("profile", { nombre, ft, mail });
        } else {
            return res.send('No hay ningun usuario con ese email');
        }
    },

    register: function (req, res) {
        return res.render('register');
    }
};


module.exports = userController;



