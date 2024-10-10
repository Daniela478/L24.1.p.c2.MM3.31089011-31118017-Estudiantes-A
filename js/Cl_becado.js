import Cl_Estudiante from "./Cl_Estudainte.js"
export default class Cl_becado extends Cl_Estudiante {
constructor (nombre, acumulado ,materias, beca){
    super(nombre, acumulado ,materias)
this.beca = beca;
}
recibe(){
    if(this.promedio >= 15)
     return 30;
    else if(this.promedio >=10) 
        return 20;
    else 
        return 0;
}


}