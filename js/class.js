//clase constructora
class Discos {
    constructor(id, autor, titulo, precio, imagen ){
        
        this.id = id,
        this.autor = autor,
        this.titulo = titulo,
        this.precio = precio,
        this.imagen = imagen,
        this.cantidad = 1
    }
    
    mostrarInfoDisco(){
        console.log(`El titulo del disco es ${this.titulo}, su autor/ra es ${this.autor} y vale ${this.precio}`)
      }
 }
 
 
 const disco1 = new Discos(1,"Taylor Swift","Lover", 1500, "loverTaylor.jfif")
 
 const disco2 = new Discos(2,"Taylor Swift","Reputation", 2000, "reputationTay.png")
 
 const disco3 = new Discos(3,"Taylor Swift", "Red (Taylor's Version)", 3000, "redTaylor.png")
 
 const disco4 = new Discos(4,"Taylor Swift","Midnights", 4000, "midnightsTay.jifif")
 
 
 
 let estanteria = []
 
 if(localStorage.getItem("estanteria")){
     //cuando no sea la primera vez
     estanteria = JSON.parse(localStorage.getItem("estanteria"))
     
 }else{
     console.log("Entra por primera vez")
     estanteria.push(disco1, disco2, disco3, disco4, )
     localStorage.setItem("estanteria", JSON.stringify(estanteria))
 }
 
 console.log(estanteria)