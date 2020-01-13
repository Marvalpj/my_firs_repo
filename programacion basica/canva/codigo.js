var texto = document.getElementById("txtLineas");
var botoncito = document.getElementById("btn");
botoncito.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");;
var lienzo = d.getContext("2d");
var ancho = d.width;
function dibujarLinea(color , xinicial , yinicial , xfinal , yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal)
    lienzo.stroke();
    lienzo.closePath();
}
function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var espacio = ancho / lineas;
    var colo = "blue"
    var color = "red"
    var colorr = "green";
    var xi = 0;
    var xf = 0;
    var yi = 0;
    var yf = 0;
    for( var i = 0;i <= lineas;i++){
        yi = espacio * i;
        xf = espacio*(i+1)
        dibujarLinea(colo , 0 , yi , xf , 300 );
        console.log("linea : "+ i);  
    }
    for(var i = 0; i <= lineas; i++){
        yi = espacio*i;
        xf = espacio*i;
        dibujarLinea(color , 300 , yi , xf , 0)
    }

}








// for(var i = 0; i< lineas; i++){
//     yf = i *10
//     xf = (i+1)*10
//     dibujarLinea(colorr , 300 , 0 , xf , yf)
// }
// dibujarLinea(colorr , 300 , 0 , 10 , 300)

// dibujarLinea("red",0,0,10,300)
// dibujarLinea("blue",0,10,20,300)
// dibujarLinea("blue",0,20,30,300)
// dibujarLinea("blue",0,30,40,300)
// do{
//     dibujarLinea(colo,xi,yi*lineas,xf*lineas,300)
//     yi++;
//     xf++;
// }while(yi < 11 && xi < 11);
// yi = xi = xf = yf = 0
// // dibujarLinea(color, 300 , yi *lineas , 0 , yf*lineas);
// // dibujarLinea(color, 300 , 300 , 0 , 0);
// do{
//     dibujarLinea(color, xi * lineas , yi *lineas , 300 , yf*lineas);
//     xi++;
//     yf++;
// }while(yf < 11 && xf < 11);

