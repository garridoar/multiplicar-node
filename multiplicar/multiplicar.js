/**
 * Multiplicar
 */


//Importa modulo básico de Node (File System). La función require es particular de Node
const fs = require('fs'); 
const color = require('colors');


let crearArchivo = (base, limite = 10)  => {
    
    return new Promise( (resolve, reject) => {

        if(!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;  //Se debe retornar dado que luego del resolve y reject continúa la ejecución del programa
        }

        let data = getTableString(base, limite);

        // for (let i = 1; i <= 10; i++) {
        //     data += `${ base } * ${ i } = ${ base * i }\n`;
        // }
        
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }.txt`);
            }
        });
        
    });
    
};

let getTableString = (base, limite) => {
    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    return data;
}

let listarTabla =  (base, limite = 10) => { 

    console.log('=================='.green);
    console.log(`===Tabla de ${ base }====`.green);
    console.log('=================='.green);

    if(!Number(base) || base <= 0)
        throw new Error("Base no es un número correcto");
    else if(!Number(limite) || limite <= 0)
        throw new Error("Limite no es un número correcto");
    else {
        let data = getTableString(base, limite);
        console.log(data);
    }
    

}

// Hace global la función declarada. Module es un objeto básico de Node, 
// dentro del cual existe un atributo llamado exports de tipo objeto con las funciones que deseamos sean de tipo global
module.exports = {  
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}
