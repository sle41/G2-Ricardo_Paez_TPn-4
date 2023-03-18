
/////////// EJERCICIO 1

let arrayCAT = ['😺', '😸', '😹']; //Array de gatos 0,1,2


function Ejercicio1(){
    numero_CAT = (document.getElementById("Ej1numberCat").value); // Obtengo valor del html
    console.log("comienzo a contar "); 
    console.log("numero gatos totales: "+numero_CAT); // Muestro la cantidad de gatos que voy a imprimir en pantalla
	let X = 0; // Preparo variable en 0, para luego poder comparar la posicion del array
	
	for (let i = 1; i <= numero_CAT; i++) { // Comienzo el for comparando el numero de datos que quiero mostrar, obtenido del html
        if (X==3) X = 0 // Pregunto sobre la posición del array, en el caso de que llegue a tres lo incializo a 0
        
        console.log(`Muestro Gato #${i}: ${arrayCAT[X]} \n`); // imprimo cara de gato segun posición de array X
        X += 1; // incremento posicion de array  luego de mostrarlo.

    }
	
}



/////////// EJERCICIO 2

let arrayCat2 = ['🐈']; // Array de gato, posicion 0
let arrayPasos = ['🐾']; //  Array de pasos, posicion 0


function Ejercicio2(){
    numero_CAT2 = (document.getElementById("Ej2numberCat").value); // Obtengo numero de gatos a imprimir desde el html
    numero_Pasos = (document.getElementById("Ej2numberPasos").value); // Obtengo numero de pasos a imprimir desde el html
    
    console.log("comienzo a contar "); 
    console.log("numero gatos totales: "+numero_CAT2); //imprimo la cantidad de gatos
    console.log("numero gatos totales: "+numero_Pasos);  // imprimo la cantidad de pasos
   
    for (let i = 1; i <= numero_CAT2; i++) { //Comienzo el for comparando el numero de gatos que quiero mostrar, obtenido del html
                
        let aux_pasos=''; // se crea variable para guardar pasos.
        for (let N = 1; N <= numero_Pasos; N++) {aux_pasos+= '🐾';} //bucle anidado, comienzo con un for comparando el numero de pasos que quiero mostrar, obtenido del html   

        console.log(`Muestro Gato #${i}: ${arrayCat2[0]}`+aux_pasos) ; // saliendo del BUCLE ANIDADO y estando en el bucle de GATOS, obtengo gatos más pasos anidados
    }
	
}

/////////// EJERCICIO 3

let arrayCat3 = ['🐈','🐈‍⬛']; // Array de gatos, en posición 0,1
let arrayPasos2 = ['🐾']; // Array de pasos, posición 0


function Ejercicio3(){ // "Ejercicio 3" Button del html
    numero_CAT3 = (document.getElementById("Ej3numberCat").value); // Obtengo numero de gatos a imprimir desde el html
    numero_Pasos2 = (document.getElementById("Ej3numberPasos").value);// Obtengo numero de pasos a imprimir desde el html
    
    console.log("comienzo a contar ");
    console.log("numero gatos totales: "+numero_CAT3);//imprimo la cantidad de gatos
    console.log("numero gatos totales: "+numero_Pasos2);// imprimo la cantidad de pasos
    let X = 0 // Preparo variable en 0, para luego poder comparar la posicion del array
    
    for (let i = 1; i <= numero_CAT3; i++) {//Comienzo el for comparando el numero de gatos que quiero mostrar, obtenido del html
        if (X==2) X = 0    // Pregunto sobre la posición del array, en el caso de que llegue a dos lo incializo a 0
        let aux_pasos='';   // Se crea una variable aux_pasos para guardar pasos
        
        for (let N = 1; N <= numero_Pasos2; N++) {aux_pasos+= '🐾';}  //bucle anidado, comienzo con un for comparando el numero de pasos que quiero mostrar, obtenido del html

        console.log(`Muestro Gato #${i}: ${arrayCat3[X]}`+aux_pasos) ; // saliendo del BUCLE ANIDADO y estando en el bucle de GATOS, obtengo gatos más pasos anidados
        X +=1; // incremento posicion de array  luego de mostrarlo.
    }
	
}

/////////// EJERCICIO 4

    
    
    function Ejercicio4() {
        let texto = document.getElementById("texto").innerText; // Si no quiero diferenciarlo coloco un .toLowerCase
        let letra = document.getElementById("letra").value; // Si no quiero diferenciarlo coloco un .toLowerCase
        let contador = 0; // declaro la variable contador para malcenar lo contado en el FOR
        
        for (let i = 0; i < texto.length; i++) { // bucle, pongo como condicion el largo del texto (Length) para realizar el bucle
            
        if (letra===texto[i]){ // comparo letra obtenida del html
            contador++ // adiciona contador
        }  
    }
	console.log(`cantidad de veces que aparece "${letra}" : `+contador) ; // imprime la cantidad de veces que aparece la letra
}

    