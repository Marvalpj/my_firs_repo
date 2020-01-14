//document.addEventListener("mouseup");
document.addEventListener("mousedown", clickMouse);
document.addEventListener("mouseup", noClick );
document.addEventListener("mousemove", moviendo)
var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");

var x;
var y;


var click;

function clickMouse(evento){
    click = true;
    console.log("============evento Clic============");
}
function noClick(evento){
    click = false;
    console.log("============No click===============");
}

function moviendo(evento){
    if( evento.target.id == "areaDibujo" && click == true){
        x = evento.offsetX;
        y = evento.offsetY;
        dibujarLinea("white", x , y , x+3 , y-3 ,papel);
    }
}


function dibujarLinea(color , xinicial , yinicial , xfinal , yfinal , lienzo)
{
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 3;
    papel.moveTo(xinicial,yinicial);
    papel.lineTo(xfinal,yfinal)
    papel.stroke();
    papel.closePath();
}