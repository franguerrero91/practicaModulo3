//3.1 Calcular el total de la compra de un producto (su precio multiplicado por la cantidad) y aplicar el IVA del 21%, 10% o 4%:

const product ={
    count:3,
    price:12.55,
    type:"ropa",
};


let total;

if(product.count>0){
    total = product.count*product.price
} else {
    total = 0
};
console.log("El precio total es de: " + total);

let tipoIva = 0.21;

switch (product.type) {
    case "alimentacion": 
        tipoIva = 0.1; break;
    case "libro":
        tipoIva = 0.04; break;
    case "ropa":
        tipoIva = 0.21; break;
}
console.log("El iva aplicado es de: " + tipoIva);

let totalMasIva = total + (total*tipoIva);
console.log("el total + iva es de: " + totalMasIva);

//3.2 Vamos a hacer una simulación de calculo de sueldo neto en nómina (este escenario es simplificado, desafío buscar legislación)

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
  };

  let retencion;

 if(empleado.bruto < 12000) {
    retencion = empleado.bruto/14
 } else if (12000 >= empleado.bruto < 24000) {
    retencion = (empleado.bruto - (empleado.bruto*0.08))
 } else if (24000>= empleado.bruto <34000) {
    retencion = (empleado.bruto - (empleado.bruto*0.16))
 } else if (empleado.bruto >= 34000) {
    retencion = (empleado.bruto - (empleado.bruto*0.30))
 };
 console.log("El salario anual en 14 pagas despues de retenciones es de: "+retencion+"€")

 let retencionHijos;

 if(empleado.hijos>0){
    retencionHijos = retencion+(empleado.bruto*0.02)
} else if (empleado.hijos=0){
    console.log("Al no tener hijo, no se le resta el 2% a su retención normal")
};

console.log("El salario mensual neto (en 12 pagas) sería de: " + (retencionHijos/12) + "€")


// Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
// Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
// Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
// Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%
// Adicionalmente:

// Si el empleado tiene hijos, restarle a la retencion 2 puntos. Con esto sacaríamos el neto anual en nómina.