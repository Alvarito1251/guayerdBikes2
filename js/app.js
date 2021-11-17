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

// Carrito
let biciOne = {
    nombre: "Trinx Free 2.0",
    precio: 81000
}

let biciTwo = {
    nombre: "Spy Ridder Mujer" ,
    precio: 65000
}

let biciThree = {
    nombre: "SPY Bullet 29",
    precio: 70000
}

let biciFour = {
    nombre: "Spy Trick 26",
    precio: 73000
}

let biciFive = {
    nombre: "Stark Amsterdam Shimano",
    precio: 81000
}

let biciSix = {
    nombre: "Trinx Free 2.0 Híbrida",
    precio: 44800
}

let biciSeven = {
    nombre: "Trinx D700 Pro",
    precio: 115000
}

let biciEight = {
    nombre: "Gravel Rodado 700 Trinx Climber",
    precio: 81000
}

let biciNine = {
    nombre: "Raleigh 2.0 Rodado 29",
    precio: 67000
}

const buttonBike1 = document.getElementById("1").addEventListener('click', addCart(bikeOne));
const buttonBike2 = document.getElementById("2").addEventListener('click', addCart(bikeTwo));
const buttonBike3 = document.getElementById("3").addEventListener('click', addCart(bikeThree));
const buttonBike4 = document.getElementById("4").addEventListener('click', addCart(bikeFour));
const buttonBike5 = document.getElementById("5").addEventListener('click', addCart(bikeFive));
const buttonBike6 = document.getElementById("6").addEventListener('click', addCart(bikeSix));
const buttonBike7 = document.getElementById("7").addEventListener('click', addCart(bikeSeven));
const buttonBike8 = document.getElementById("8").addEventListener('click', addCart(bikeEight));
const buttonBike9 = document.getElementById("9").addEventListener('click', addCart(bikeNine));

const cart = [];
const buttonPay = document.querySelector(".")

function addCart(bikes){
    cart.push(bikes);
}

