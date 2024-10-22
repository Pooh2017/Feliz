let numeros=[];
let esp='<br>';
numeros=[2,33,21,3,12,3,34,-31,-1]
document.write(numeros);
//Convertir a tipo texto
document.write(esp);
document.write('De tipo cadena: ',numeros.toString());
//
document.write(esp);
document.write('El tamaño del arreglo: ',numeros.length);
document.write(esp);
document.write('El dato ultimo es: ',numeros[numeros.length-1]);
//Borrar el ultimo elemento
numeros.pop();
document.write(esp);
document.write(numeros);
//Ingresar el ultimo elemento
numeros.push(218);
document.write(esp);
document.write(numeros);
document.write(esp);
//Borrar el primer elemento
numeros.shift();
document.write('Borra el primer elemento: ',numeros,esp);
//Ingresa el primer elemento
numeros.unshift(1561)
document.write('Ingresa el primer elemento: ',numeros,esp);
//Eliminar elementos de un punto a otro
numeros.splice(2,3);
document.write('Borra elementos de un punto: ',numeros,esp);
//Copiar elementos
let copia=numeros.slice(1,5);
document.write('Copia: ',copia,esp);
//Organizar en forma alfabetica .short()
let objetos=['uva','puta','nai','mesi','ana','sol'];
document.write('No ordenado: ',objetos,esp);
objetos.sort();
document.write('Ordenado: ',objetos,esp);
document.write('Alreves: ',objetos.reverse(),esp);
