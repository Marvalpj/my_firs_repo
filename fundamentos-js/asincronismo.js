const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const onResponse = function( data ){
        
    console.log(`hola yo soy ${data.name}`)

}

/*
unction obternerPersonaje(id , callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get( url , { crossDomain: true }, function( data ){     
        console.log(`hola yo soy ${data.name}`)
    } )
    if(callback){
        callback()
    }
}

obternerPersonaje(1 , function(){
    obternerPersonaje(2 , function(){
        obternerPersonaje(3 , function() {
            obternerPersonaje(4)
        })
    })
})
*/
function obternerPersonaje(id , callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
        .get( url , { crossDomain: true }, callback)
        .fail(  () => {
        console.log(`error al buscar al personaje ${id}`)
        })
    
}
obternerPersonaje(1 , function(data){
    console.log(`hola yo soy ${data.name}`)
    
    obternerPersonaje(2 , function(data){
        console.log(`hola yo soy ${data.name}`)
        
        obternerPersonaje(3 , function(data){
            console.log(`hola yo soy ${data.name}`)
            
            obternerPersonaje(4 , function(data){
                console.log(`hola yo soy ${data.name}`)
                
            })
        })
    })
})

// obternerPersonaje(3)
