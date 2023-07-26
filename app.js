//Se define el arreglo
let array1 = [2023, 2024, 2025];
//Contador para marcar la posicion se tiene en cuenta los valores de array
let contador = 3;

//Variable que almacena el valor buscado
const valor =8188013234823360;
//se utiliza interval para que cada milisegundo imprima en pantalla la funcion Sumador()
let varl = setInterval(Sumador,0.0001)

function Sumador(){     
  //Incrementamos el contador
    contador++
    //variable que almacenara la suam del arreglo
    let sumar = 0;
    //se suma el arreglo
    for(i=0 ; i<array1.length ;i++){     
    sumar += array1[i];
    }
    // se elimina el primer valor del arreglo
    array1.shift();
    //Intruducimos el resultado de la suma
    array1.push(sumar)
    //Imprimimos en consola el mensaje
    console.log('posicion '+contador +' valores anteriores '+array1 +' Numero impreso '+ sumar)
    //Se evalua la condicion de manera estricta 
    //buscando el valor si lo encuentra imprime mensaje en la posicion encontrada
      if (sumar === valor){
        console.log("#######")
        console.log(`>> VALOR ENCONTRADO >>>> encontre a ${valor}  en posicion ${contador}`)
        console.log("#######")
        clearInterval(varl);
      }
    
  }


