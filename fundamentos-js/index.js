var pedro = {
    nombre: 'Pedro',
    apellido: 'Marval',
    edad: 23
};

var nelson = {
    nombre: 'Nelson',
    apellido: 'Marval',
    edad: 22
};

var juan = {
    nombre: 'Juan',
    apellido: 'Sal',
    edad: 12
};

var jose = {
    nombre: 'Jose',
    apellido: 'Salazar',
    edad: 15
};
//si se modifica un atibuto de jose se modifica tambien en pedro
//debido a que en js cuando se igualan objetos, se iguala la referencia de memoria
var otraPersona = pedro;
//para crear un objeto con los mismos datos que otro sin pasar la referencia se hace asi
var otraaPersona = {
    ...pedro
}

// function imprimirNombre( persona ){
//     console.log(persona.nombre.toUpperCase());
// }

function imprimirNombre( { nombre } ){
    console.log(nombre.toUpperCase());
}
function imprimirNombreYEdad(  {nombre , edad} ){
    console.log(  "hola mi nombre es: " + nombre  + " y tengo "+ edad + " anios" );
}

imprimirNombre(pedro);
imprimirNombre(nelson);

imprimirNombreYEdad(pedro);
imprimirNombreYEdad(nelson);
//los objetos en js cuando se envia como parametro se pasan por refeencia
function cumpleaniosObjeto(persona){
    persona.edad++;
}
//asi se desglosa un objeto 

function cumpleaniosDesglose(persona){
    return {
        ...persona,
        edad : persona.edad +1
    }
}

function cumpleanios(edad){
    edad++;
}

// var esMayorDeEdad = function( persona ){
//     return persona.edad >= 18
// }

// const esMayorDeEdad = ( persona ) => {
//     return persona.edad >= 18
// }

const esMayorDeEdad = ( {edad} ) => edad >= 18


var personas = [ pedro,nelson,jose,juan]

const mayoresDeEdad = ( {edad} ) => edad >= 18;

//filter itera el array
var personasMayores = personas.filter( mayoresDeEdad )

// var personasMayores = personas.filter( function () {
//     return persona.edad >= 18
// })

console.log(personasMayores)
// // asi se modifica el array
// const embejecer = persona => {
//     persona.edad += 10;
//     return persona
// }


const embejecer = persona => {
    return {
        ...persona,
        edad: persona.edad+10
    }
}
//es lo mismo que arriba
// const embejecer = persona => ({
//         ...persona,
//         edad: persona.edad+10
//     }
// )



var personaEnvejece = personas.map(embejecer)

console.log(personaEnvejece)