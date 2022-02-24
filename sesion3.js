//Cuadrados
console.group("Cuadrado")

// Medidas en cm del cuadrado
const ladoCuadrado = 5; 
function infoCuadrado(ladoCuadrado){
    console.log("Lados del cuadrado miden: "+ ladoCuadrado+"cm");
}
infoCuadrado(ladoCuadrado)

function calculoPerimetroCuadrado(ladoCuadrado){
    const perimetroCuadrado = ladoCuadrado * 4;
    //alert("El perimetro del cuadrado es: "+ perimetroCuadrado+"cm");
};

function calculoAreaCuadrado(ladoCuadrado){
    const areaCuadrado = ladoCuadrado**2;
    //alert("El área del cuadrado es: "+areaCuadrado+"cm^2");
};
calculoAreaCuadrado(ladoCuadrado)

console.groupEnd()

console.group("Triangulo")

//Lados del triangulo
const ladoTrianguloA = 5;
const ladoTrianguloB = 5;
const baseTriangulo = 5;
const alturaTriangulo = 5.5;

function infoTriangulo(ladoTrianguloA, ladoTrianguloB, baseTriangulo, alturaTriangulo){
    console.log("Las medidadas del triangulo son: "+
        "\nlado1 del triangulo: "+ladoTrianguloA+
        "\nlado2 del triangulo: "+ladoTrianguloB +
        "\nbase del triangulo: "+baseTriangulo+
        "\nla altura del triangulo es: "+alturaTriangulo
    );
};
infoTriangulo(ladoTrianguloA, ladoTrianguloB, baseTriangulo, alturaTriangulo);

function calculoPerimetroTriangulo(ladoTrianguloA, ladoTrianguloB, baseTriangulo){
    const perimetroTriangulo = ladoTrianguloA + ladoTrianguloB+baseTriangulo;
    console.log("El perimetro del triangulo es: "+perimetroTriangulo);
};
calculoPerimetroTriangulo(ladoTrianguloA, ladoTrianguloB, baseTriangulo);

function calculoAreaTriangulo(baseTriangulo,alturaTriangulo){
    const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
    console.log("El área del triangulo es: "+areaTriangulo);
};
calculoAreaTriangulo(baseTriangulo,alturaTriangulo);

console.groupEnd()

// Circulo
console.group("Circulo");

//Radio
const radio = 10;
//Diametro
function calculoDiametro(radio){
    diametro = 2*radio;
    return diametro;
};
let diametro1 = calculoDiametro(radio);

//Constante PI
const pi = Math.PI; 

function infoCirculo(radio, diametro1){
    console.log("Las medidad del circulo son: \nradio: "+
        radio+"\ndiametro: " +diametro+
        "\npi: "+pi);
};
infoCirculo(radio, diametro1)

//Perimetro o circunferencia
function calculoPerimetroCirculo(radio){
    const perimetroCirculo = calculoDiametro(radio)*pi;
    console.log("El perimetro del circulo es: "+perimetroCirculo);
}
calculoPerimetroCirculo(radio)

//Área
function calculoAreaCirculo(radio){
    const areaCirculo = pi * radio**2;
    console.log("El área del circulo es: "+areaCirculo);
}
calculoAreaCirculo(radio)
console.groupEnd();

//Usando el metodo onclick para ejecutar información de html en js
function calcularPerimetroCuadrado(){
    //Capturar el elemento input del formulario
    const ladoCuadrado2 = document.getElementById("inputCuadrado");
    const valueCuadrado = ladoCuadrado2.value;
    calculoPerimetroCuadrado(valueCuadrado);
}

function calcularAreaCuadrado(){
    //Capturar el elemento input del formulario
    const ladoCuadrado2 = document.getElementById("inputCuadrado");
    const valueCuadrado = ladoCuadrado2.value;
    calculoAreaCuadrado(valueCuadrado);
}