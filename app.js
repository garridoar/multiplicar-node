//PAQUETES UTILIZADOS:
    // Nodemon
    // Yargs
    // Colors


const argv = require('./config/yargs').argv;
const color = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');  //Desestructuracion del objeto multiplicar (derivado de multiplicar.js)


//argv del objeto process, es mas completo utilizar yargs
// let base = process.argv[2].split('=')[1];    

let comando = argv._[0];

switch( comando ) {

    case 'listar': 
        listarTabla(argv.base, argv.limite);
    break;
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log('Archivo creado:', `${ archivo }`.green))
        .catch(e => console.log(e));
    break;

    default:
        console.log('Comando no reconocido');

}


 
