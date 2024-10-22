
function  ciclo_for(){
    for(let i=0 ; i<10; i++){
        document.write('El número es: ',i,'<br>');
    }
}
function ciclo_doWhile(opc){
    do{
        opc=parseInt(prompt('INGRESE UN NUMERO'));
        if(opc != 5){
            alert('HOLA');
        }else if(opc ==5 ){
            alert('Adios');
        }

    }while(opc != 5);
}
function ciclo_while(a,total,idex){
    while(idex<101){
        total+=a;
        a++;
        idex++;
    }
    return total;
}
//ciclo_for();
//ciclo_doWhile();
//document.write(ciclo_while(0,0,0));

