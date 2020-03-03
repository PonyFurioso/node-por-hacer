const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarera por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {descripcion})
    .command('actualizar', 'Actualiza el estado completado de una tarea por hacer', {descripcion, completado})
    .command('borrar', 'Borra una tarea por hacer', {descripcion})
    .help()
    .argv;

module.exports = {
    argv
}