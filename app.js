const argv = require('yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.d);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (const tarea of listado) {
            console.log('========Por hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.d, argv.c);
        console.log(argv.d, argv.c);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.d);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}
