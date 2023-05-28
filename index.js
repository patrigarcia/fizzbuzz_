for (let i = 1; i <= 1000; i++) { //Acá va a ejecutarse siempre que i sea < a 1 y se incrementa en 1 cada vez que itera.
    if (i % 3 === 0 && i % 5 === 0) { //Si i es múltiplo de 3 y 5, entonces imprime FizzBuzz.
        console.log("FizzBuzz");
    } else if (i % 3 === 0) { //Si i es múltiplo de 3, sólo se imprime Fizz.
        console.log("Fizz");
    } else if (i % 5 === 0) { //Si i es múltiplo de 5, se va a imprimir Buzz.
        console.log("Buzz");
    } else {
        console.log(i); //En caso de que i no sea múltiplo de 3 ni 5, entonces imprime el número.
    }
}