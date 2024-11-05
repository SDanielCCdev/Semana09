/* 
Titulo: Maquina dispensadora
Descripción: 
Se requiere escribir un programa que tenga  las opciones
con los siguientes productos:

1.Gaseosa : S/2.00
2.Papitas: S/3.00
3.Galleta: S/1.00
4.Agua Mineral: S/4.00

El usuario debera ingresar una opcion y luego deberá ingresar la moneda,
solo se admite un valor maximo de moneda de S./5.00.

El programa deberá retornar el vuelto y escribir en pantalla el producto 
que acaba de comprar. 

El programa debe reconocer si el monto de la moneda ingresada es menor al precio del producto elegido debera escribir en pantalla que el saldo es insuficiente.
*/
const MENU =
    "LA TIENDITA DE DON PEPE\n" +
    "==========================\n" +
    "1.Gaseosa: 🥤  S/2.00\n" +
    "2.Papitas: 🍟 S/3.00\n" +
    "3.Galleta: 🍪 S/1.00\n" +
    "4.Agua Mineral: 🍶 S/4.00\n" +
    "==========================\n" +
    "Ingresa la opcion:\n"

const INGRESO =
    "==========================\n" +
    "Ingrese una moneda (maximo S/5)\n" +
    "==========================\n"

const M_MAXIMA = 5;
let opcion = "";

do {
    opcion = parseInt(prompt(MENU))
    switch (opcion) {
        case 1:
            coin = parseInt(prompt(INGRESO));
            const PRECIO_S = 2.00
            // if (precioS < coin){
            //     alert("Saldo insuficiente")
            // }
            let vueltoS = coin - PRECIO_S;
            if (coin < PRECIO_S) {
                alert("Saldo insuficiente")
            }
            else if (coin > 0 && coin <= M_MAXIMA) {
                alert("Acabas de comprar una 🥤 y tu vuelto es: S./" + vueltoS + ".00");
                opcion = parseInt(prompt(MENU))
            } else {
                alert(`El monto ingresado no esta permitido, por favor maximo valor de S/${M_MAXIMA}`)
            }
            break
        case 2:
            coin = parseInt(prompt(INGRESO));
            const PRECIO_P = 3.00
            // if (precio < coin);
            let vueltoP = coin - PRECIO_P;
            if (coin > 0 && coin <= M_MAXIMA) {
                alert("Acabas de comprar una 🍟 y tu vuelto es: S./" + vueltoP + ".00");
                opcion = parseInt(prompt(MENU))
            } else {
                alert(`El monto ingresado no esta permitido, por favor maximo valor de S/${M_MAXIMA}`)
            }
            break
        case 3:
            coin = parseInt(prompt(INGRESO));
            const PRECIO_G = 1.00
            // if (precio < coin);
            let vueltoG = coin - PRECIO_G;
            if (coin > 0 && coin <= M_MAXIMA) {
                alert("Acabas de comprar una 🍪 y tu vuelto es: S./" + vueltoG + ".00");
                opcion = parseInt(prompt(MENU))
            } else {
                alert(`El monto ingresado no esta permitido, por favor maximo valor de S/${M_MAXIMA}`)
            }
            break
        case 4:
            coin = parseInt(prompt(INGRESO));
            const PRECIO_A = 4.00
            // if (precio < coin);
            let vueltoA = coin - PRECIO_A;
            if (coin > 0 && coin <= M_MAXIMA) {
                alert("Acabas de comprar una 🍶 y tu vuelto es: S./" + vueltoA + ".00");
                opcion = parseInt(prompt(MENU))
            } else {
                alert(`El monto ingresado no esta permitido, por favor maximo valor de S/${M_MAXIMA}`)
            }
            break
    }
} while (opcion <= 4) {
    alert("Opcion invalida, vuelva a marcar")
    opcion = parseInt(prompt(MENU))
}
