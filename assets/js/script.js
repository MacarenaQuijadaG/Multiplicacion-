// CALCULA EL FACTORIAL
const calcularFactorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calcularFactorial(n - 1);
    }
  };
  
  // FUNCION DE TABLAS Y FACTORIALES 
  const mostrarTablasYFactoriales = (numero) => {
   
    console.log(`Tablas de multiplicar del 1 al ${numero}:`);
    for (let i = 1; i <= numero; i++) {
      console.log(`Tabla del ${i}:`);
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
      //SALTO DE LINEA ENTRE MULTIPLICACIONES
      console.log('\n');
    }
  
    // IMPRIME POR CONSOLA EL FACTORIAL
    console.log(`Factoriales del 1 al ${numero}:`);
    for (let i = 1; i <= numero; i++) {
      console.log(`Factorial de ${i}: ${calcularFactorial(i)}`);
    }
  };
  

  //FUNCION PARA INGRESAR UN NUMERO DEL 1 AL 20
  const solicitarNumeroAValidar = () => {
    let numeroIngresado;
  
    do {
      // USUARIO INGRESA NUMERO
      numeroIngresado = prompt("Ingrese un número entre 1 y 20:");
  
      // IF DE VALIDACION SI ESTA DENTRO DEL RANGO DEL 1 AL 20
      if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 20) {
        console.log("Número fuera del rango. Por favor, ingrese un número válido.");
      } else {
        mostrarTablasYFactoriales(parseInt(numeroIngresado));
        break;
      }
    } while (true);
  
    // MUESTRA AL FINAL DE LA CONSOLA EL NUMERO QUE FUE INGRESADO 
    console.log(`Número ingresado: ${numeroIngresado}`);
  };
  
  solicitarNumeroAValidar();

 