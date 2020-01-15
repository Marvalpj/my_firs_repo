var teclas = {
    UP : 38,
    LEFT : 37,
    DOWN : 40,
    RIGHT : 39
};
var vp =document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown" , moverCerdo);

var fondo = {
    url: "img/tile.png",
    cargaOK: false
};
var vaca = {
    url:"img/vaca.png",
    cargaOK: false
};
var cerdo = {
    url: "img/cerdo.png",
    cargaOK: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load" , cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url; 
vaca.imagen.addEventListener("load",cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar(xc,yc);
}
function cargarVacas(){
    vaca.cargaOK = true;
    dibujar(xc,yc);
}
function cargarCerdo(){
    cerdo.cargaOK = true;
    dibujar(xc,yc);
}

var cantidad = aleatorio(0 , 50);
var vacaX = [];
var vacaY = [];
for(var i = 0; i<cantidad; i++){
    vacaX[i] = aleatorio(0,6);
    vacaY[i] = aleatorio(0,6);
}
//posicion aleatorio del cerdo
var xc = aleatorio(0,420);
var yc = aleatorio(0,420); 

function dibujar(xc,yc){
    if(fondo.cargaOK ){
        papel.drawImage( fondo.imagen,0,0);
    }
    if(vaca.cargaOK){
        for(var v = 0; v < cantidad ; v++){
             var ejeX= vacaX[v] * 80;
             var ejeY = vacaY[v] * 80;
            console.log(ejeX + "--"+ ejeX);
            papel.drawImage( vaca.imagen, ejeX , ejeY );
        } 
    }
    dibujarCerdo(xc,yc)
} 

function dibujarCerdo(xc,yc){
    if(cerdo.cargaOK){
        papel.drawImage( cerdo.imagen,xc,yc);
    }
}

function moverCerdo(evento){
    var movimiento = 10;
    
    switch(evento.keyCode){
        case teclas.UP:
            dibujar(xc , yc - movimiento);
            yc -= movimiento;
            break;
            case teclas.RIGHT:
                dibujar(xc + movimiento , yc);
                xc += movimiento;
                break;
                case teclas.DOWN:
                    dibujar(xc , yc + movimiento);
                    yc += movimiento;
                break;
                case teclas.LEFT:
                    dibujar(xc - movimiento , yc);
                    xc -= movimiento;
                    break;
    }
}

function aleatorio( maxi , min ){

    var resultado;
    resultado = Math.floor( Math.random() * (maxi - min) + min   );
    return resultado;
}
