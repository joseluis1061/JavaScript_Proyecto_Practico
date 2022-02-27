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
  const media = dataListNumbers.reduce(function(previousValue = 0, currentValue){
    return previousValue += currentValue;
  });
  return media;
};

function calculoMediana(dataListNumbers){

};
/*
function calculoModa(dataListNumbers){

};*/

function onClickButtonStatistic(){
  const dataListInput = document.getElementById("InputList").value;
  const dataListNumbers = arrayStringToNumber(dataListInput); 

  const media = calculoMedia(dataListNumbers);

  const mediana = calculoMediana(dataListNumbers);

  const resultsPrint = document.getElementById("ResultP");
  resultsPrint.innerText="Resultados: \nMedia= "+media;
};