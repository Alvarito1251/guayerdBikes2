function buttonRegister() {
    const nameUser = document.getElementById("name").value;
    const passwordOne = document.getElementById("passwordOne").value;
    const passwordTwo = document.getElementById("passwordTwo").value;
    const err = document.getElementById("err");
    // const register = document.getElementById("register");

    if(nameUser !== "" && passwordOne !== "" && passwordTwo !== "") {
        localStorage.setItem("nameUser", nameUser);
        localStorage.setItem("passwordOne", passwordOne);
        localStorage.setItem("passwordTwo", passwordTwo);
        setTimeout(() => {
            window.location.replace("./login.html");
        },2000);
    } else {
        err.textContent = "Todos los campos son obligatorios"
        return false;
    }
};

// Validando el LOGIN.
function validateForm() {
    let user = document.forms["myForm"]["user"].value;
    let password = document.forms["myForm"]["password"].value;

    let getName = localStorage.getItem("nameUser");
    let getPassword = localStorage.getItem("passwordOne");

    if(user === getName && password === getPassword) {
        window.location.replace("./index.html");
    } else if(user == "" && password == "") {
        document.getElementById("err").textContent = "Usuario o contraseña incorrectos";
        return false;
    }
}



