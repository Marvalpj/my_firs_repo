class Persona {
    constructor(nombre , apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar( fn ){
        //var nombre = this.nombre
        //var apellido = this.apellido
        var { nombre , apellido} = this
        console.log( `hola me llamo ${nombre} ${apellido}`)
        if( fn ){
            fn(nombre ,apellido )
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }

}

class Desarrollador extends Persona {
    constructor(nombre , apellido,altura){
        
        super(nombre ,apellido,altura)
        //super se encarga de hacer lo que esta abajo proque esta clase extiende de Persona 
        // this.nombre = nombre
        // this.apellido = apellido
        // this.altura = altura
    }

    saludar( fn ){
        var { nombre , apellido} = this
        console.log(`hola me llamo ${nombre} ${apellido} y soy desarrollador`)
        if( fn ){
            fn(nombre , apellido , true )
        }   
    }

}

function responderSaludo( nombre ,apellido , esDev ){
    console.log(`hola ${nombre} ${apellido}`)
    if(esDev){
        console.log(`hola que geniales son los developers`)
    }

}

var pedro = new Persona('pedro', 'marval',1.85)
var nelson = new Persona('nelson', 'marval',1.70)

var pedroDev = new Desarrollador('pedro', 'marval',1.85)
var nelsonDev = new Desarrollador('nelson', 'marval',1.70)


// function Persona( nombre , apellido ){
//     this.nombre = nombre
//     this.apellido = apellido
//     // se ejecuta implicitamente
//     //return this
// }

// Persona.prototype.saludar = function(){
//     console.log( `hola me llamo ${this.nombre} ${this.apellido}`)
// }

// Persona.prototype.miNombre = function(){
//     return this.nombre
// } 


// function Desarrollador( nombre , apellido ){

//     this.nombre = nombre
//     this.apellido = apellido


// }


// Desarrollador.prototype.saludar = function(){
//     console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
// }


// var pedro = new Persona('Pedro' , 'Jose');
// var nelson = new Persona('nelson' , 'eduardo');
// var jose = new Persona('jose' , 'Jose');

// pedro.saludar();
// pedro.miNombre();

