

//function mostrarInfoDisco(array){
//   console.log("Bienvenido! Nuestro catalogo es:")
//   array.forEach((Disco)=>{
//       console.log(Disco.id, Disco.titulo, Disco.precio, Disco.autor)
//   })
//}


let DiscosDiv = document.getElementById("Discos")

let modalCarrito = document.getElementById("modalCarrito")

//Funcion
function mostrarInfoDiscos(array){
    //vaciar Div
    DiscosDiv.innerHTML = ""
    
     array.forEach((Discos)=>{
      console.log(Discos.id, Discos.titulo, Discos.precio, Discos.autor) 
       
      let agregarBtn = document.getElementById(`agregarBtn${agregarAlCarrito.id}`)
        //adjunto evento
        agregarBtn.addEventListener("click", ()=>{
            
            agregarAlCarrito( Discos)
        })
  })
   }


   let productosEnCarrito = []
   //if para preguntar si entra por primera vez o si hay algo en storage
   if(localStorage.getItem("carrito")){
       //cuando ya existe algo en el storage entra aca:
       productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
       console.log(productosEnCarrito)
   }else{
       productosEnCarrito = []
       localStorage.setItem("carrito", productosEnCarrito)
   
   }


function agregarAlCarrito( Discos){
    console.log(`el Disco ${Discos.titulo} de ${Discos.autor} a sido agregado. vale ${Discos.precio}`)
    productosEnCarrito.push(Discos)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}


