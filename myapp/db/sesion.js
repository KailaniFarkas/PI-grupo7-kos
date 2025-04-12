const sesion = {
    nombre: null,
    logeado: false

};

function setLogeado(login) {
    sesion.logeado = login
};

function setNombre(nuevoNombre) {
    sesion.nombre = nuevoNombre
};

module.exports = {
    sesion,
    setLogeado,
    setNombre
};
