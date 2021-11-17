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
const bikeOne = {
    name: "Trinx Free 2.0",
    price: 81000
}

const bikeTwo = {
    name: "Spy Ridder Mujer",
    price: 65000
}

const bikeThree = {
    name: "SPY Bullet 29",
    price: 70000
}

const bikeFour = {
    name: "Spy Trick 26",
    price: 73000
}

const bikeFive = {
    name: "Stark Amsterdam Shimano",
    price: 81000
}

const bikeSix = {
    name: "Trinx Free 2.0 Híbrida",
    price: 44800
}

const bikeSeven = {
    name: "Trinx D700 Pro",
    price: 115000
}

const bikeEight = {
    name: "Gravel Rodado 700 Trinx Climber",
    price: 81000
}

const bikeNine = {
    name: "Raleigh 2.0 Rodado 29",
    price: 67000
    
}

const buttonBike1 = document.getElementById("1").addEventListener('click', () => addCart(bikeOne.price));
const buttonBike2 = document.getElementById("2").addEventListener('click', () => addCart(bikeTwo.price));
const buttonBike3 = document.getElementById("3").addEventListener('click', () => addCart(bikeThree.price));
const buttonBike4 = document.getElementById("4").addEventListener('click', () => addCart(bikeFour.price));
const buttonBike5 = document.getElementById("5").addEventListener('click', () => addCart(bikeFive.price));
const buttonBike6 = document.getElementById("6").addEventListener('click', () => addCart(bikeSix.price));
const buttonBike7 = document.getElementById("7").addEventListener('click', () => addCart(bikeSeven.price));
const buttonBike8 = document.getElementById("8").addEventListener('click', () => addCart(bikeEight.price));
const buttonBike9 = document.getElementById("9").addEventListener('click', () => addCart(bikeNine.price));

// const buttonPay = document.querySelector("#pay");
// buttonPay.addEventListener('click', cartPrice());

const cart = [];

function addCart(bikes) {
    cart.push(bikes);
    //document.getElementById("msj").textContent = "Se agrego al carrito";
}

function cartPrice() {
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        total += cart[i]
    }
    document.getElementById("subtotal").textContent = total;
}


const imgCart = document.getElementById("imgCart").addEventListener('click', () => viewCart())

function viewCart(){

}