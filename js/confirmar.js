function confirmar1(){
    confirm("¿Deseas registrarte?");
}

function confirmar2(){
    confirm("¿Deseas iniciar sesión?");
}

function myFunction() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}

function bienvenido() {
    opcion = prompt("Introduzca su nombre:", "Bruno Josue");
    email = document.getElementById("email").value;
    contra = document.getElementById("password").value;
    if ((email == null || email == "") || (contra == null || contra == "")) {
        alert("Se requiere el ingreso de datos");
    } else {
        if (opcion == null || opcion == "") {
        alert("Has cancelado o introducido el nombre vacío");
        } else {
            alert("Bienvenido " + opcion);
        }
    }
}