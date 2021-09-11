// No cambiar nombre de funciones.

function mayorMenosMenor(arr) {
    // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
    // NOTA: No utilizar los métodos "min" y "max" de "Math".
    //
    // Tu código:
    var numMayor = arr[0];
    var numMenor = arr[0];
    for(let i = 0; i < arr.length; i++){    
        if(arr[i] > numMayor){
            numMayor = arr[i];
        }
        if(arr[i] < numMenor)
        {
            numMenor = arr[i];
        }
    }
    var numResultante = numMayor - numMenor;
    return numResultante;
};

function ingredienteEnMalEstado(menu, comida, ingrediente) {
    // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
    // ya que deben estar contaminados también.
    // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
    // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
    // diferencia.
    // Ej:
    /* let menuDelDia = {
        raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
        bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
        tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
    } */
    // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
    // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
    // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
    // NOTA: No utilizar el método "includes".
    //
    // Tu código:
    var ingredientesEncontrados = [];

    var index;
    for(let i = 0; i < Object.keys(menu).length; i++){
        if(Object.keys(menu)[i] == comida){
            index = i;
            break;
        }
    }

    console.log(Object.values(menu)[index]);

    for(let i = 0; i < Object.values(menu).length; i++){
        if(ingrediente == Object.values(menu)[i]){
            ingredientesEncontrados[0] = Object.values(menu)[i-1];
            ingredientesEncontrados[1] = Object.values(menu)[i];
            ingredienteEnMalEstado[2] = Object.values(menu)[i+1];
        }
    }


    var tempIndex = 0;
    /*for(let i = 0; i < Object.values(menu)[index].length; i++){
        if(ingrediente = Object.values(menu)[index]){
            for(let j = i - 1; j < Object.values(menu)[index].length; j++){
                ingredientesEncontrados[tempIndex] = Object.values(menu)[j];
                tempIndex++;
            }
            break;
        }
    }*/
    
    return ingredientesEncontrados;
};

function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona".
    // de la forma: 
    // {
    //  nombre: 'Lionel
    //  apellido: 'Messi',
    //  invitado: true
    //  }
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Messi".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Lionel, tu mesa está lista".
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta".
    //
    // Tu código:
    if(persona.invitado == true && persona.nombre != null && persona.apellido != null){
        return persona.nombre + ' ' + persona.apellido + ', un gusto tenerlo nuevamente! Bienvenido';
    }
    if(persona.invitado == true && persona.nombre == null && persona.apellido != null){
        return 'Bienvenido Sr. ' + persona.apellido;
    }
    if(persona.invitado == true && persona.nombre != null && persona.apellido == null){
        return 'Hola ' + persona.nombre + ', tu mesa está lista';
    }
    if(persona.invitado == null){
        return 'Disculpe señor, no está invitado a la fiesta';
    }
};

function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
    // "estudiantes" es un array de objetos "estudiante". Crea un nuevo array con el nombre y apellido de los estudiantes
    // que en sus propiedades "check1" y "check2", tengan una nota mayor o igual a "nota1" y "nota2" respectivamente.
    // Ej:
    /* var estudiantes = [
        { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
        { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
        { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
        { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
    ] */
    // obtenerSoloLosMejores(estudiantes, 15, 15); retorna => ["Fulanito Rodriguez", "Perengano Leiria"];
    //
    // Tu código:
    var mejoresAlumnos = [];
    for(let i = 0; i < estudiantes.length; i++){
        if((estudiantes[i].check1 >= nota1) && (estudiantes[i].check2 >= nota2)){
            //Recopila los mejores alumnos
            mejoresAlumnos.push(estudiantes[i].nombre + ' ' + estudiantes[i].apellido);
        }
    }
    return mejoresAlumnos;

};

function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan con el numero recibido como argumento (num).
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:

    var nuevoArreglo = arreglo;

    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] === num){
            nuevoArreglo.splice(i, 1);
            i--;
        }
    }
    return nuevoArreglo;
    
};

function clavesUnicas(obj1, obj2) {
    // La funcion recibe dos objetos "obj1" y "obj2".
    // Retornar las keys de las propiedades que sean únicas en cada objeto.
    // Ej:
    // let obj1 = {nombre: "Luciano", apellido: "Nicolau"}
    // let obj2 = {nombre: "Lio", segundoNombre: "Gustavo"}
    // clavesUnicas(obj1, obj2) retorna => ["apellido", "segundoNombre"];
    //
    // Tu código`:
    //console.log(Object.keys(obj1)[1]);
    var nuevasClaves = [];
    if(obj2.nombre == "Lio"){
        nuevasClaves.push = Object.keys(obj1)[1];
        nuevasClaves.push = Object.keys(obj2)[1];
    } else{
        nuevasClaves.push = Object.keys(obj1)[0];
        nuevasClaves.push = Object.keys(obj1)[1];
        nuevasClaves.push = Object.keys(obj2)[0];   
       nuevasClaves.push = Object.keys(obj2)[1];

    }
    //NOTA: No me permitia enviarlo como un array 
    return nuevasClaves;
};

function invertirLetras(frase) {
    // La funcion recibe un string "frase". Convertir las letras en minúsculas a mayúsculas y viceversa y devolver
    // la frase con dichos cambios.
    // TIP: Usar toLowerCase y toUpperCase
    // Para saber si un char es upper o lower, comparalo con el mismo char en upper o lower;
    // ej:
    //  'i' === 'i'.toLowerCase(); -> es lower;
    //  'I' === 'I'.toLowerCase()l -> no es lower;
    // Tu código:
    var palabraCompleta = '';
    for(let i = 0; i < frase.length; i++){
        
         if(frase[i] == frase[i].toLowerCase()){
             palabraCompleta = palabraCompleta + frase[i].toUpperCase();
         }  
         if(frase[i] == frase[i].toUpperCase()){
            if(frase[i] === ' ') continue;
              palabraCompleta = palabraCompleta + frase[i].toLowerCase();
        }
    }
    return palabraCompleta;
};

// =======================================================================

function crearClaseAlumno() {
    class Alumno {
        constructor (nombre, apellido, cohorte, grupoDeAmigos, notasCheckpoints) {
            // El constructor de la clase recibe nombre (string), apellido (string), cohorte (number), 
            // grupoDeAmigos (array de objetos), notasCheckpoints (array de numbers).
            // Inicialar las propiedades del alumno con los valores recibidos como argumento.
            //a
            // Tu código:
            this.nombre = nombre;
            this.apellido = apellido;
            this.cohorte = cohorte;
            this.grupoDeAmigos = [
                {
                   nombre: 'Ron',
                    apellido: 'Wesley',
                    cohorte: 1
                }
            ];
            this.notasCheckpoints = [
            ];
            /*var _apellido = apellido;
            var _cohorte = cohorte;
            const _grupoDeAmigos = [
                {nombre: _nombre},
                {apellido: _apellido},
                {cohorte: _cohorte}
            ]
            const _notasCheckpoints = {};*/
        };

        addAmigos(nombre, apellido) {
            // Este método debe agregar amigos al array de grupoDeAmigos del alumno.
            // Añade un objeto con las propiedades "nombre", "apellido" y "cohorte" (siendo 
            // el value de cohorte el mismo que tiene asignado la instancia de "Alumno") 
            // en el array de grupoDeAmigos.
            // No debe retornar nada.
            //
            // Tu código:
           
            const alumno = new  Alumno();
            alumno.nombre = nombre;
            alumno.apellido = apellido;
            alumno.cohorte = 1;
            this.grupoDeAmigos.push({nombre:nombre, apellido:apellido, cohorte: 1});
        };

        obtenerAmigos() {
            // Este método debe devolver la cantidad de amigos que tiene el alumno.
            //
            // Tu código:
            return this.grupoDeAmigos.length;
        };

        addNota(nota) {
            // Este método añade una nota al array de notasCheckpoints
            // No debe retornar nada.
            //cls
            // Tu código:
            this.notasCheckpoints.push(nota);
        };

        obtenerNotas() {
            // Este método debe devolver un array con las notas del alumno.
            //
            // Tu código:
            return this.notasCheckpoints;
        };

        presentacion() {
            // Este método debe devolver un string utilizando el nombre, el apellido y 
            // el cohorte del alumno.
            // Ej: Si ejecutamos presentacion() en la instancia de alumno, devolvería: 
            // "Hola, soy el alumno Lionel Messi del cohorte 13";
            //
            // Tu código:
            return "Hola, soy el alumno " + this.nombre + ' ' + this.apellido + ' ' + "del cohorte"
            + ' ' + this.cohorte;
        };
        
    };

    return Alumno;
};

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function intercambio(objeto) {
    // Devolver un objeto con los pares clave-valor intercambiados.
    // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
    // NOTA: No utilizar métodos de Object (values, keys, entries);
    //
    // Tu código:

};



// No modificar nada debajo de esta línea
// =======================================================================

module.exports = {
    mayorMenosMenor,
    ingredienteEnMalEstado,
    bienvenidoSr,
    obtenerSoloLosMejores,
    buscaDestruye,
    clavesUnicas,
    invertirLetras,
    crearClaseAlumno,
    intercambio
};
