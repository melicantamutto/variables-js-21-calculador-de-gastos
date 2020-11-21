console.log('Calculador de gastos')

alert('Calculador de gastos')

let cantServicios = 3;
let dineroDisponible = 0;

const dineroTotal = prompt('Ingresa la cantidad de dinero que tiene disponible');
dineroDisponible = Number(dineroTotal);

const servicio1 = prompt(`*Servicios disponibles: ${cantServicios}* Ingresá el nombre del servicio`);
const monto1 = prompt('Ingresá el costo del servicio');
dineroDisponible = Number(dineroTotal) - Number(monto1);

alert(`Te quedan: $${dineroDisponible}`)

const servicio2 = prompt(`*Servicios disponibles: ${cantServicios = cantServicios -1}* Ingresá el nombre del servicio`);
const monto2 = prompt('Ingresá el costo del servicio');
dineroDisponible = Number(dineroDisponible) - Number(monto2);

alert(`Te quedan: $${dineroDisponible}`)

const servicio3 = prompt(`*Servicios disponibles: ${cantServicios = cantServicios -1}* Ingresá el nombre del servicio`);
const monto3 = prompt('Ingresá el costo del servicio');
dineroDisponible = Number(dineroDisponible) - Number(monto3);

const totalMonto = Number(monto1) + Number(monto2) + Number(monto3);

alert(`*Servicios disponibles: ${cantServicios -1}*`)
alert(`Te quedan: $${dineroDisponible}`)


alert(`Tenés que pagar:
    ${servicio1}: $${monto1},
    ${servicio2}: $${monto2},
    ${servicio3}: $${monto3},
En total: $${totalMonto}.
Tenés $${dineroTotal} por lo que te quedarían $${dineroDisponible} después de pagar todo.
`);
