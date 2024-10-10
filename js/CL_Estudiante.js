export default class Cl_Estudiante{
constructor (nombre, acumulado ,materias){
this.nombre = nombre;
this.acumulado= acumulado;
this.materias= materias;
}

set nombre(n){
    this._nombre = n;
}
get nombre (){
    return this._nombre;
}
set acumulado(a){
    this._acumulado = a;
}
get acumulado(){
    return this._acumulado;
}
set materias(m){
    this._materias = m;
}
get materias(){
    return this_materias;
}
promedio(){
    return this.acumulado / this.materias;
}
}
 
