//Try - catch
try {
    console.log("En el Try se agrega el código a evaluar/In the Try the code to be evaluated is added");
    noExist;
} catch (error) {
    console.log("Catch, captura cualquier error surgido o lanzado en el try/Catch, capture any error raised or thrown in the try");
    console.log(error);
} finally {
    console.log("> El bloque finally se ejecutara siempre al final de un bloque Try-Catch/The finally block is always executed at the end of a Try-Catch block. <")
}



try {
    let number = "y";
    if (isNaN(number)) {
        throw new Error("El caracter introducido no es un numero");
    }
    console.log(number*number);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}