const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir por cero.";
        }
        return num1 / num2;
    } else {
        return "Error: Operación no válida.";
    }
}

function preguntarOperacion() {
    rl.question("Ingrese la operación (suma, resta, multiplicacion, division o salir): ", function(operacion) {
        if (operacion.toLowerCase() === "salir") {
            console.log("Gracias por usar la calculadora.");
            rl.close();
        } else {
            rl.question("Ingrese el primer número: ", function(n1) {
                rl.question("Ingrese el segundo número: ", function(n2) {
                    const num1 = parseFloat(n1);
                    const num2 = parseFloat(n2);
                    const resultado = realizarOperacion(num1, num2, operacion.toLowerCase());
                    console.log("Resultado:", resultado);
                    preguntarOperacion(); // Repetir
                });
            });
        }
    });
}

preguntarOperacion();
