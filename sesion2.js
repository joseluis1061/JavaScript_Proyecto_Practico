console.group("Cuadrado")
const ladoCuadrado = 5; // Medidas en cm del cuadrado
console.log("Lados del cuadrado miden: "+ ladoCuadrado+"cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+ perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado**2;
console.log("El área del cuadrado es: "+areaCuadrado+"cm^2");
console.groupEnd()

console.group("Triangulo")
//Lados del triangulo
const ladoTrianguloA = 5;
const ladoTrianguloB = 5;
const ladoTrianguloC = 5;
const baseTriangulo = 5;
const alturaTriangulo = 5.5;

console.log("Las medidadas del triangulo son: "+
"\nlado1 del triangulo: "+ladoTrianguloA+
"\nlado2 del triangulo: "+ladoTrianguloB +
"\nbase del triangulo: "+baseTriangulo+
"\nla altura del triangulo es: "+alturaTriangulo
);

const perimetroTriangulo = ladoTrianguloA + ladoTrianguloB+baseTriangulo;
console.log("El perimetro del triangul es: "+perimetroTriangulo);

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El área del triangulo es: "+areaTriangulo);
console.groupEnd()

console.group("Circulo");

//Radio
const radio = 10;
//Diametro
const diametro = 2*radio;
//Constante PI
const pi = Math.pi; 

console.log("Las medidad del circulo son: \nradio: "+
radio+"\ndiametro: " +diametro+
"\npi: "+pi
);

//Perimetro o circunferencia
const perimetroCirculo = diametro*pi;
console.log("El perimetro del circulo es: "+perimetroCirculo);
//Área
const areaCirculo = pi * radio**2;
console.log("El área del circulo es: "+perimetroCirculo);

console.groupEnd();


