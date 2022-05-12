let numero1: number = Number(prompt("Ingrese Primer Numero"));
let numero2: number = Number(prompt("Ingrese Segundo Numero"));
let resultado: number;
let opcion: number = Number(
  prompt(
    "Ingrese Número 1 para suma, 2 para resta, 3 multipicación, 4 division"
  )
);

switch (opcion) {
  case 1:
    resultado = numero1 + numero2;
    console.log("El resultado de la suma es:", resultado);
    break;

  case 2:
    resultado = numero1 - numero2;
    console.log("El resultado de la resta es:", resultado);
    break;
  case 3:
    resultado = numero1 * numero2;
    console.log("El resultado de la multiplicación es", resultado);
    break;

  case 4:
    resultado = numero1 / numero2;
    console.log("El resultado de la división es :", resultado);
    break;
}
