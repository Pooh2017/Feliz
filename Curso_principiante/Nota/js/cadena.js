let palabra='Pedro pica papas con un pico ';
let palabra2='ME GUSTA LA GORDA';
let esp='<br>';
document.write(palabra);
document.write(esp);
//El tamaño de la cadena
document.write('El número de letras es: ',palabra.length)
document.write(esp);
//Solo llamar los caracteres que quietes
document.write('Primera 9 letras: ',palabra.substring(0,9));
document.write(esp);
document.write('La primera 14 letras: ',palabra.slice(0,14));
//Cambiar una palabra o caracter por otro
let cambio=palabra.replace('papas', 'pito');
document.write(esp);
document.write(cambio);
document.write(esp);
//Mayuscula y minuscula
document.write(palabra.toUpperCase());
document.write(esp);
document.write(palabra.toLowerCase());
document.write(esp);
//Unir texto
document.write(palabra.concat(palabra2));
document.write(esp);
//Acortar los espacios
document.write(palabra.trimStart());
document.write(esp);
document.write(palabra2.trimEnd());
document.write(esp);
document.write(palabra.trim());
document.write(esp);
//corta la palabra
document.write(palabra2.split('GUSTA'));