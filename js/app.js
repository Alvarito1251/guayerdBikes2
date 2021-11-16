let submit = document.getElementById("ingresar").addEventListener("click", registerForm());
function registerForm(){
    let nombre = document.getElementById("name").value;
    let contraseña = document.getElementById("password").value;
    let contraseña2 = document.getElementById("password2").value;
    let error = document.getElementById("error");
    // if (nombre == "" || contraseña == "" || contraseña2 == ""){
    //     error.innerHTML = "Complete todos los campos";
    //     return false;
    // }else if(contraseña != contraseña2){
    //     error.innerHTML = "Las contraseñas deben coincidir";
    //     return false;

    // }else{
    //     // window.location.replace("./login.html");
    //     // localStorage.setItem("nombre", nombre);

    // }
    localStorage.setItem("nombre", nombre);
    let valor = localStorage.getItem("nombre");
    console.log(valor);
}


function validateform (){
    let usuario = document.forms["myForm"]["user"].value;
    let contraseña  = document.forms["myForm"]["password"].value;
    if (usuario == "" || contraseña == ""){
        let error = document.getElementById("error");
        error.innerHTML = "Este campo es obligatorio llenarlo";
        return false;
    }
}




