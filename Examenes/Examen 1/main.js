/* 
Mostrar lista de parejas de numeros amigos 
menores a la cantidad puesta en la caja

Dos numeros a y b se consideran amigos

Si son diferentes y si a es igual a la suma de divisores
de b

Ademas si b es igual a la suma de divisores de a meneores
a a

*/

document.querySelector("#btn").addEventListener('click', () => {
    let cantidad = Number(document.querySelector("#cantidad").value);

function divisores(x){
    var suma = 0;

    for(var y = 1; y <= x/2; y++){
        if (x % y == 0){
            suma += y;
        }
    }
    return suma;
}

var resultadoM, resultadoN;

for(var m = 1; m <= cantidad; m++){
    resultadoM = divisores(m);

    for(var n = 1; n <= cantidad; n++){
        resultadoN = divisores(n);

        if(resultadoM == n && resultadoN == m){
            if(resultadoM != resultadoN){
                console.log("Los nummeros "+m+" y "+n+" son amigos");
            }
        }
    }
}

});