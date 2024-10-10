import Cl_Estudiante from "./CL_Estudiante.js";
export default class Cl_Becado extends Cl_Estudiante {
constructor (nombre, acumulado ,materias){
    super(nombre, acumulado ,materias)
}
    recibe(){
    if(this.promedio() >= 15)
     return "Le corresponde una beca de" +30;
    else if(this.promedio() >=10) 
        return "Le corresponde una beca de" + 20;
    else 
        return "No le corresponde beca";
    }
   
    devolverNotas(){
    return this.acumulado;
    }
    
    devolverNombre(){
    return this.nombre;
    }
}