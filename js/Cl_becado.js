import Cl_Estudiante from "./CL_Estudiante";
export default class Cl_becado extends Cl_Estudiante {
constructor (nombre, acumulado ,materias){
    super(nombre, acumulado ,materias)
}
    recibe(){
    if(this.promedio() >= 15)
     return 30;
    else if(this.promedio() >=10) 
        return 20;
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