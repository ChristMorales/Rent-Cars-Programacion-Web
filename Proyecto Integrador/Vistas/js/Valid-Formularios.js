function comprobaremail(valor, campo) {
  
    var mensaje = "";
    
    if (this.value == "") {
      mensaje = "El email no puede estar vacío";
    } else if (this.value.indexOf("@") < 0) {
      mensaje = "El email debe contener una @";
    } else if (this.value.indexOf(".com", this.value.indexOf("@")) < 0) {
      mensaje = "complete con @ejemplo.com detras de la @";
    } 
    
    this.setCustomValidity(mensaje);
  }
  
  var email = document.querySelector("#email");
  
  email.addEventListener("invalid", comprobaremail);
  email.addEventListener("input", comprobaremail);

  var email = document.querySelector("#email2");
  
  email.addEventListener("invalid", comprobaremail);
  email.addEventListener("input", comprobaremail);
