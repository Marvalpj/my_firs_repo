
var imagenes = [];
imagenes["cauchin"] = "img/vaca.png";
imagenes["pokacho"] = "img/pollo.png";
imagenes["tocinauro"] = "img/cerdo.png";

class Pakiman {
    constructor(nombre , vida , ataque){
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.imagen.src = imagenes[this.nombre];
    }   

    hablar(){
        alert(this.nombre);
    }
    mostrar(){
        document.body.appendChild(this.imagen);
        
        document.write("<br /><strong>"+this.nombre+"</strong> <br />")
        document.write("Vida: "+this.vida + "<br />");
        document.write("Ataque: "+this.ataque + "<hr />");
        
    }
}

// var cauchin = new Pakiman("cauchin",100,60);
// var pokacho = new Pakiman("pokacho",120,80);
// var tocinauro = new Pakiman("tocinauro",60,90);

var coleccion = [];

coleccion.push(new Pakiman("cauchin",100,60));
coleccion.push(new Pakiman("pokacho",120,80));
coleccion.push(new Pakiman("tocinauro",60,90));

for(var p of coleccion){
    p.mostrar();
}
// para indices
for(var p in coleccion){
    p.mostrar();
}