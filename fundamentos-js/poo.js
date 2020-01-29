function Persona( nombre , apellido ){
    this.nombre = nombre
    this.apellido = apellido
    // se ejecuta implicitamente
    //return this
}

Persona.prototype.saludar = function(){
    console.log( `hola me llamo ${this.nombre} ${this.apellido}` )
}

var pedro = new Persona('Pedro' , 'Jose');
