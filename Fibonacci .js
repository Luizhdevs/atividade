function fibonacci(num) {
  let a = 0, b = 1;
  while (a < num) {
      [a, b] = [b, a + b];  
  }
  return a === num;
}

let numero = parseInt(prompt("Informe um número:"));

if (fibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
