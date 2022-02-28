function arrayStringToNumber(dataList){
  let numbers = dataList.split(','); // Separar datos por de cadena por ,
  let datos = numbers.map(function(dato){
    return parseFloat(dato); // Transformar de string a float
  });
  return datos;
};

/*Calculo de la media */
function calculoMedia(dataListNumbers){
  //reduce usa un valor previo donde acumulamos los valores operados sobre cada 
  //valor leido del array currentValue. En este caso hacemos una suma acumulad
  //con un valor inicial del acumulador en 0
  let media = dataListNumbers.reduce(function(previousValue = 0, currentValue){
    return previousValue += currentValue;
  });
  media = media/dataListNumbers.length;
  return media.toFixed(2);
};

function calculoMediana(dataListNumbers){
  //Primero ordenamos los datos en forma ascendente 
  const numberSort = dataListNumbers.sort(function(a,b){
    return a-b;
  });
  const esPar = numberSort.length%2;
  if(esPar===0){
    const DatoMedioArray = numberSort.length/2;
    const firstDato = numberSort[DatoMedioArray-1];
    const secondDato = numberSort[DatoMedioArray];
    let mediana = (firstDato+secondDato)/2;
    return mediana;
  }else{
    const DatoMedioArray = Math.round(numberSort.length/2); // Pocisión central
    const mediana = numberSort[DatoMedioArray-1];
    return mediana;
  }

};

// Con esta función comprobamos si es un sistema multimodal
function multiModa(lista1Array){
  posiciones = [];
  for(const i = lista1Array.length-1; i>0; i--){
    //Comparo si tengo datos con igual cantidad de repeticiones
    if((i == lista1Array.length-1) & (lista1Array[i][1]==lista1Array[i-1][1])){

    }
    else if(lista1Array[i][1]==lista1Array[i-1][1]){
      posiciones.push(lista1Array[i][0]);
    }else{
      break;
    }
  }
  return posiciones;
};

function calculoModa(dataListNumbers){
  //Primero ordenamos los datos en forma ascendente 
  const numberSort = dataListNumbers.sort(function(a,b){
    return a-b;
  });
  //Lista con conteo de datos
  const listCount = {}
  //Conteo cuantos numeros se repiten
  numberSort.map(function(dato){
    //Si existe dato con ese nombre como llave sumamos 1
    if (listCount[dato]){
      listCount[dato] +=1;
    }
    //Si aun no tenemos dato con ese nombre lo iniciamos en 1
    else{
      listCount[dato] = 1;
    }
  });
  // Object.entries retorna el objeto en arrays de parejas
  // Luego los ordenamos para tomar el ultimo daoto como el que mas se repite
  const lista1Array = Object.entries(listCount).sort(
    function (elementoA, elementoB) {
      //Solo toma los datos de valor no la clave
      return elementoA[1] - elementoB[1];
    }
  );

  // La moda se puede repetir debemos comprobar si teenmos mas de una moda
  const moda multiModa(lista1Array);
  console.log(moda)
};

function onClickButtonStatistic(){
  const dataListInput = document.getElementById("InputList").value;
  const dataListNumbers = arrayStringToNumber(dataListInput); 

  const media = calculoMedia(dataListNumbers);

  const mediana = calculoMediana(dataListNumbers);

  const moda = calculoModa(dataListNumbers);

  const resultsPrint = document.getElementById("ResultP");
  resultsPrint.innerText="Resultados: \nMedia = "+media
  +"\nMediana = "+mediana
  +"\nModa = "+moda;
};