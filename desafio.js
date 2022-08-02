let BaseAlumnos = [];
let promedio = 0;
class Alumno {
    constructor (nombre, apellido,calificacion){
        this.nombre=nombre;
        this.apellido=apellido;
        this.calificacion=calificacion;
    }
}

/* Boton agregar alumno*/
function agregar () {
    let nombreCaptura= document.getElementById("nombre").value;
    let apellidoCaptura=document.getElementById("apellido").value;
    let calificacionCaptura= parseFloat(document.getElementById("calificacion").value);
    let nuevoAlumno= new Alumno (nombreCaptura,apellidoCaptura,calificacionCaptura);
    guardar(nuevoAlumno);
}
function guardar(nuevoAlumno){
    BaseAlumnos.push(nuevoAlumno);
}
/* Boton promedio de alumnos*/
function cantidadAlumnos (){
    console.log(BaseAlumnos.length);
}
/* Boton promedio alumnos*/
function promedioAlumnos(){
    let i = 0;
    for (i ; BaseAlumnos.length >= i;i++){
promedio += BaseAlumnos[i].calificacion;
    }
    console.log("El promedio de las calificaciones es " + promedio/BaseAlumnos.length)
}
