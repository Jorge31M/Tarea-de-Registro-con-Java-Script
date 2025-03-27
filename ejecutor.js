function registro(){
    let nombre =prompt("ingresa un nombre");

    let edad =prompt("ingresa tu edad");

    let curp =prompt("ingresa tu curp");

    let contra =prompt("ingresa una contra");  
    
    var confirmacion = window.confirm("¿Quieres modificar tu contra?");
      if (confirmacion == false) {
        alert("muchas gracias por aver confirmado que tu contra esta correcta");
      } 
      else{
 
        alert("okey  espera unos minutos para generar tu nueva contra")  
      }
      let contraN =prompt("ingresa una contra");
    alert("Tu Nombre es"+nombre);
    alert("Tu Edad es"+edad);
    alert("Tu CURP es"+curp);
    alert("Tu CONTRA es"+contra);
    alert("Tu CONTRA NUEVA es"+contraN);
        console.table([{nombre,edad,curp,contra,contraN}]);

}
registro();