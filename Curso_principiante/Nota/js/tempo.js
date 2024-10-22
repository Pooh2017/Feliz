function comenzarTiempo(){
    let valoTiempo=document.getElementById("casilla").value;
    setTimeout(mensaje, 1000*valoTiempo);
    
}
function mensaje(){
    alert('Se acaboo tu tiempo');
}