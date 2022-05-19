//Creación de la clase persona
class Persona{
    //El constructor es la funcion principal que se encarga de
    //inicializar la clase. En este caso recibe 2 valores nombre y apellido
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }

    //Creamos un metodo que este disponible cuando se instancie la clase Persona
    //Este metodo mostrará en consola el nombre y apellido de la persona
    saludar(){
        //Aqui definimos el mensaje que se mostrará en la consola
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
    }
}

//Instanciación de la Clase Persona
const persona = new Persona('Drasly','Rafael')

persona.saludar()