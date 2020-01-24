

class billete{
    constructor( v, c ){
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero(){
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for( var item of caja){
        if( dinero > 0){
            
            div = Math.floor(dinero / item.valor)
            
            if( div > item.cantidad ){
                papel = item.cantidad;
            }else{
                papel = div;
            }

            entregado.push( new billete( item.valor , papel ) );

            dinero -= item.valor * papel;
        }
    }
    resultado.textContent = "";
    if(dinero > 0){
        resultado.innerHTML = "soy un cajero pobre y no tengo dinero";
    }else{
        
        for(var e of entregado){
            if(e.cantidad > 0){
                resultado.innerHTML += e.cantidad + " billetes de $ : "+e.valor + "<br/>";
            }
        }

    }
    
}


var caja = [];
var entregado = [];
caja.push(new billete( 100 , 5));
caja.push(new billete( 50 , 10));
caja.push(new billete( 20 , 30));
caja.push(new billete( 10 , 30));
caja.push(new billete( 5 , 5));
var dinero = 0;
var div = 0;
var papel = 0;

var resultado = document.getElementById("result");
var btn = document.getElementById("retirar");
btn.addEventListener("click", entregarDinero);




