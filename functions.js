
function validarEdad(edad) {

	var edad = document.getElementById("edad").value;
 	var e = parseInt(edad); 

 	if (e > 21) {
 		alert("edad valida");
 		return true; 
 	}

 	alert("edad invalida"); 
 	return false; 

}

function validarTel() {

        var tel = document.getElementById("tel").value;
		if (tel.length <=12) {
			alert("valido"); 
			return true;  
		}

	alert("invalido"); 
	return false; 

}

function validarMail(mail) {

	var mailex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;  

	if (!mailex) {

                alert("mail valido"); 
                return true; 

                }

                alert("mail valido");               
                return false;
 }