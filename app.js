const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivo, listarTable } = require('./multiplicar/multiplicar');




let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTable(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.green(`Archivo creado : tabla-${argv.base}-al-${ argv.limite }`)))
            .catch(e => console.log(e));

        break;
    default:
        console.log('Comando no reconocido');
        break;

}


//console.log(argv);


//let base = '10';
//console.log(process.argv);

//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(argv.limite);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado : ${ archivo }`))
//     .catch(e => console.log(e));