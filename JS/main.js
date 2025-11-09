

function proCont(){
    let num, cont, sum, multi;
    let centi='s';
    let opc;

    while(centi.toLowerCase()==='s'){
        alert("Menu:\n1. Sumar números\n2. Multiplicar números");
        opc=prompt("eliga una opcion (1 o 2): ");

        switch(opc){
            case'1': 
            num=parseInt(prompt("¿cuantos numeros desea operar?"));
            sum=0;
            for(cont=1;cont<=num;cont++){
            let numero= parseFloat(prompt("Ingrese número" +cont+":"));
            sum=sum+numero;
            }
            alert("el resultado de la suma es;"+ sum);
            break;

            case '2': 
            num=parseInt(prompt("¿cuantos numeros desea operar?"));
            multi=1;
            for(cont=1;cont<=num;cont++){
            let numero= parseFloat(prompt("Ingrese número" +cont+":"));
            multi=multi*numero;
            }
            alert("el resultado de la multiplicacion es;"+ multi);
            break;
        }
        centi=prompt("¿desea continuar? s=si n=no");
        }
    }





function proCom() {
   
    function factorial(n) {
        let f = 1;
        for (let i = 1; i <= n; i++) {
            f *= i;
        }
        return f;
    }

    function leerCombinatorio() {
        let n, k;

        do {
            n = parseInt(prompt("Ingrese el valor de n (n ≥ 1):"));
        } while (isNaN(n) || n < 1);

        do {
            k = parseInt(prompt(`Ingrese el valor de k (0 ≤ k ≤ ${n}):`));
        } while (isNaN(k) || k < 0 || k > n);

        alert(`C(${n}; ${k}) = ${n}! / [${k}! × (${n} - ${k})!]`);
        return { n, k };
    }

    function combSimplific(n, k) {
        let r;
        if (k < (n - k)) {
            r = k;
        } else {
            r = n - k;
        }

        let numerador = [];
        let denominador = [];
        let tempN = n;

        for (let i = r; i >= 1; i--) {
            numerador.push(tempN);
            tempN--;
        }

        for (let i = r; i >= 1; i--) {
            denominador.push(i);
        }

        let numProd = numerador.reduce((a, b) => a * b, 1);
        let denProd = denominador.reduce((a, b) => a * b, 1);
        let simplificado = numProd / denProd;

        alert(
            `C(${n}; ${k}) = ${numerador.join(" × ")} / ${denominador.join(" × ")} = ${simplificado}`
        );
    }

    function principalCombinaciones() {
        const { n, k } = leerCombinatorio();
        combSimplific(n, k);
        const resultado = factorial(n) / (factorial(k) * factorial(n - k));
        alert(`Resultado final: ${resultado}`);
    }

    principalCombinaciones();
}


function proTDB(){
    
  let e = parseInt(prompt("Ingrese exponente:"));

  if (isNaN(e) || e < 0) {
    alert("Por favor, ingrese un número entero mayor o igual a 0");
    return;
  }
  let resultado= "";
  for (let ei = 0; ei <= e; ei++) {
    let coef = 1;
    let fila = "";

    for (let eb = 0; eb <= ei; eb++) {
      fila += coef + " ";
      coef = (coef * (ei - eb)) / (eb + 1);
    }
    resultado += fila+ "\n";
  }
  alert(resultado);
}



function suma(n) {
    if (n === 1) {
        return 1; //caso base
    }
    return n + suma(n - 1); 
}
function proRecur(){
    // Pedir al usuario un número
    alert("Este programa hace una suma recursiva")
    let n = parseInt(prompt("Ingrese el número que quieres sumar:"));

    // Validar que sea un número positivo
    if (isNaN(n) || n < 1) {
        alert("Por favor ingrese un número entero positivo.");
        return;
    }

    // Calcular la suma usando la función recursiva
    let resultado = suma(n);

    // Mostrar el resultado
    alert("La suma de 1 hasta " + n + " es: " + resultado);
}

function Nprimo(){
  let primos = [];

    // Recorrer los números del 1 al 100
    for (let num = 1; num <= 100; num++) {
        let cont = 0;

        // Contar divisores del número actual
        for (let x = 1; x <= num; x++) {
            if (num % x === 0) {
                cont++;
            }
        }

        // Si tiene exactamente 2 divisores, es primo
        if (cont === 2) {
            primos.push(num);
        }
    }

    // Mostrar los números primos en una ventana emergente
    alert("Los números primos son: " + primos.join(", "));
}


function proDiv(){
  // definir num como entero
    let num = parseInt(prompt("ingrese un numero:")); // leer num

    // validar si realmente se ingreso un numero
    if (isNaN(num)) {
        alert("Por favor ingrese un número válido");
        return; // fin del programa si no es número
    }

    // mostrar mensaje inicial
    alert("Analizando divisibilidad del número: " + num);

    // desde 2 hasta 10 comprobar si es divisible
    for (let divisor = 2; divisor <= 10; divisor++) {
        if (num % divisor === 0) {
            // Si num % divisor = 0 Entonces
            if (divisor === 2) {
                alert("Es divisible en 2 porque termina o es un número par");
            } else if (divisor === 3) {
                alert("Es divisible en 3 porque la suma de sus cifras da múltiplo de 3");
            } else if (divisor === 4) {
                alert("Es divisible en 4 porque sus últimas cifras forman múltiplo de 4");
            } else if (divisor === 5) {
                alert("Es divisible en 5 porque termina en 0 o 5");
            } else if (divisor === 6) {
                alert("Es divisible en 6 porque también lo es en 2 y 3");
            } else if (divisor === 7) {
                alert("Es divisible en 7");
            } else if (divisor === 8) {
                alert("Es divisible en 8 porque sus últimas cifras forman múltiplo de 8");
            } else if (divisor === 9) {
                alert("Es divisible en 9 porque la suma de sus cifras da múltiplo de 9");
            } else if (divisor === 10) {
                alert("Es divisible en 10 porque termina en 0");
            }
        } else {
            // SiNo
            alert("No es divisible en " + divisor);
        } // Fin Si
    } // Fin Para
}



function proMCD(){
     let n, rango, i, contador, cont_comunes, k;
    let numeros = [];
    let comunes = [];
    let es_comun;

    // Leer cantidad de números
    n = parseInt(prompt("¿Cuántos números desea ingresar?"));

    if (n > 0) {
        // Leer los números
        for (i = 0; i < n; i++) {
            numeros[i] = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
        }

        // Leer el rango hasta donde calcular divisores
        rango = parseInt(prompt("Ingrese hasta qué rango desea calcular los divisores:"));

        // Mostrar divisores de cada número
        for (i = 0; i < n; i++) {
            let divisores = [];
            for (contador = 1; contador <= rango; contador++) {
                if (numeros[i] % contador === 0) {
                    divisores.push(contador);
                }
            }
            alert("Divisores de " + numeros[i] + ": " + divisores.join(" "));
        }

        // Calcular divisores comunes
        cont_comunes = 0;
        for (contador = 1; contador <= rango; contador++) {
            es_comun = true;
            for (i = 0; i < n; i++) {
                if (numeros[i] % contador !== 0) {
                    es_comun = false;
                    break;
                }
            }
            if (es_comun) {
                comunes.push(contador);
                cont_comunes++;
            }
        }

        // Mostrar resultados
        if (cont_comunes > 0) {
            alert("Divisores comunes encontrados: " + comunes.join(" "));
            alert("El Máximo Común Divisor (MCD) es: " + comunes[cont_comunes - 1]);
        } else {
            alert("No se encontraron divisores comunes en el rango dado.");
        }
    } else {
        alert("Este valor no es operable");
    }
}


function promcm(){
     let n, i, j, rango, cont_comunes;
    let numeros = [];
    let comun = [];
    let valor;
    let contador;
    let es_comun;

    // Leer cantidad de números
    n = parseInt(prompt("¿Cuántos números desea ingresar?"));

    if (n > 0) {
        // Leer los números
        for (i = 0; i < n; i++) {
            numeros[i] = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
        }

        // Leer el rango hasta donde calcular múltiplos
        rango = parseInt(prompt("Ingrese hasta qué rango desea calcular los múltiplos:"));

        // Mostrar múltiplos de cada número
        for (i = 0; i < n; i++) {
            let multiplos = [];
            contador = 1;
            while (contador <= rango) {
                multiplos.push(numeros[i] * contador);
                contador++;
            }
            alert("Múltiplos de " + numeros[i] + ": " + multiplos.join(" "));
        }

        // Calcular múltiplos comunes
        cont_comunes = 0;
        for (j = 1; j <= rango; j++) {
            valor = numeros[0] * j;
            es_comun = true;

            for (i = 1; i < n; i++) {
                if (valor % numeros[i] !== 0) {
                    es_comun = false;
                    break;
                }
            }

            if (es_comun) {
                comun.push(valor);
                cont_comunes++;
            }
        }

        // Mostrar resultados
        if (cont_comunes > 0) {
            alert("Múltiplos comunes encontrados: " + comun.join(" "));
            alert("El Mínimo Común Múltiplo (MCM) es: " + comun[0]);
        } else {
            alert("No se encontraron múltiplos comunes en el rango.");
        }
    } else {
        alert("Este valor no es operable");
    }
}

function proTEMCD(){
    
    let n, i, j, a, b, mcd, mcm;
    let opcion = '';
    let numeros = [];
    let cocientes = [];
    let residuos = [];

    do {
        n = parseInt(prompt("¿Cuántos números desea ingresar? (mínimo 2):"));
        if (isNaN(n) || n < 2) {
             alert(" Error: Ingrese solo números (mínimo 2). No se permiten letras ni símbolos.");
            alert("Debe ingresar al menos dos números.");
            continue;
        }

        // Leer números
        for (i = 0; i < n; i++) {
            numeros[i] = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
        

        while (isNaN(numeros[i])) {
                alert(" Error: Ingrese solo números válidos. No se permiten letras ni símbolos.");
                numeros[i] = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
            }
        }

        // Calcular el MCD
        mcd = numeros[0];
        for (i = 1; i < n; i++) {
            a = mcd;
            b = numeros[i];
            j = 0;

            // Reiniciar arreglos
            cocientes = [];
            residuos = [];

            // --- Algoritmo de Euclides ---
            while (b !== 0) {
                cocientes[j] = Math.floor(a / b);
                residuos[j] = a % b;
                a = b;
                b = residuos[j];
                j++;
            }
            j--;

            // --- Construcción de la tabla completa ---
            let tabla = "\n";
            

            //  Cocientes
            let lineaCocientes = "Cocientes:           ";
            for (let k = 0; k <= j; k++) {
                lineaCocientes += (cocientes[k] ?? "         ") + "        ";
            }
            lineaCocientes += "\n";

            // Números
            a = mcd;
            b = numeros[i];
            let residuo = 0;
            let lineaNumeros = "Números:     " + mcd + "   ";
            while (b !== 0) {
                residuo = a % b;
                lineaNumeros += b + "   ";
                a = b;
                b = residuo;
            }
            lineaNumeros += "\n";

            // Residuos
            let lineaResiduos = "Residuos:           ";
            for (let k = 0; k <= j; k++) {
                lineaResiduos += (residuos[k] ?? "        ") + "       ";
            }
            lineaResiduos += "0\n";

            // Mostrar todo junto
            tabla += lineaCocientes + lineaNumeros + lineaResiduos;
            tabla += "\n";
            tabla += "M.C.D = " + a + "\n";

            alert(tabla);
            mcd = a;
        }

        alert("El M.C.D de todos los números es: " + mcd);

        // Calcular MCM
        opcion = prompt("¿Desea calcular también el M.C.M? (S=si N=no): ");
        if (opcion.toUpperCase() === "S") {
            mcm = numeros[0];
            for (i = 1; i < n; i++) {
                mcm = (mcm * numeros[i]) / euclides(mcm, numeros[i]);
            }
            alert("El m.c.m de todos los números es: " + mcm);
        }

        opcion = prompt("¿Desea realizar otra operación? (S=si N=no): ");
    } while (opcion.toUpperCase() !== "N");

    // Función auxiliar
    function euclides(a, b) {
        let residuo;
        while (b !== 0) {
            residuo = a % b;
            a = b;
            b = residuo;
        }
        return a;
    }
}




function proTFA(){
    let num, x, contador, fac;
    let centi = 's';

    while (centi.toLowerCase() === 's') {
        num = parseInt(prompt("Ingrese un número mayor que 1:"));

        if (num > 1) {
            fac = num;
            let resultado = "La factorización prima de " + fac + " es: ";
            x = 2;

            while (num > 1) {
                contador = 0;
                while (num % x === 0) {
                    contador++;
                    num = num / x;
                }

                if (contador > 0) {
                    if (contador === 1) {
                        resultado += x;
                    } else {
                        resultado += x + "^" + contador;
                    }
                    if (num > 1) {
                        resultado += " * ";
                    }
                }
                x++;
            }

            alert(resultado);
        } else {
            alert("Debes ingresar un número mayor a 1");
        }

        centi = prompt("¿Desea continuar? (s = sí, n = no)");
    }
}

