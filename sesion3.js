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


/*
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
*/

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
    //alert("El perimetro del circulo es: "+perimetroCirculo);
}
calculoPerimetroCirculo(radio)

//Área
function calculoAreaCirculo(radio){
    const areaCirculo = pi * radio**2;
    console.log("El área del circulo es: "+areaCirculo);
    //alert("El área del circulo es: "+areaCirculo);
}
calculoAreaCirculo(radio)
console.groupEnd();

// CUADRADO

//Usando el metodo onclick para ejecutar información de html en js
function calcularPerimetroCuadrado(){
    //Capturar el elemento input del formulario
    const ladoCuadrado2 = document.getElementById("inputCuadrado");
    const valueCuadrado = ladoCuadrado2.value;
    calculoPerimetroCuadrado(valueCuadrado);
}

function calcularAreaCuadrado(){
    //Capturar el elemento input del formulario
    const ladoCuadrado = document.getElementById("inputCuadrado");
    const valueCuadrado = ladoCuadrado.value;
    calculoAreaCuadrado(valueCuadrado);
}

// CIRCULO
function calcularPerimetroCirculo(){
    const radioCirculo = document.getElementById("inputCircle");
    const radio = radioCirculo.value;
    calculoPerimetroCirculo(radio);
};

function calcularAreaCirculo(){
    const radioCirculo = document.getElementById("inputCircle");
    const radio = radioCirculo.value;
    calculoAreaCirculo(radio);
};

// TRIANGULO

function validarTrianguloIsosceles(ladoa,ladob,ladoc){
    if(ladoa == ladob){
        return [true, ladoa, ladoc]; //esIsosceles, ladoIgual, Base
    }
    else if (ladoa == ladoc) {
        return [true, ladoa, ladob];
    } else if(ladob == ladoc){
        alert("Ingreso validacion "+ladoa+" "+ladob+" "+ladoc);
        return [true, ladob, ladoa];
    }
    else{
        return [false]; //No es isosceles
    }
};

function calcularAlturaTriangulo(){
    const ladoa = document.getElementById("inputTriangulo1").value;
    const ladob = document.getElementById("inputTriangulo2").value;
    const ladoc = document.getElementById("inputTriangulo3").value;
    const esIsosceles = validarTrianguloIsosceles(ladoa, ladob,ladoc);

    if(esIsosceles[0]){
        
        const altura = Math.sqrt(esIsosceles[1]**2 - (esIsosceles[2]**2)/4);
        alert("La altura del triangulo es: "+altura+"cm");
    }
    else{
        alert("Las medidas no son de un triangulo isósceles");
    }
};
