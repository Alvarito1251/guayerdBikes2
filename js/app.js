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
        err.classList.remove("visually-hidden");
        err.textContent = "Todos los campos son obligatorios"
        return false;
    }
};

// Validando el LOGIN.
function validateForm() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    let getName = localStorage.getItem("nameUser");
    let getPassword = localStorage.getItem("passwordOne");

    if(user === getName && password === getPassword) {
        setTimeout(() => {
            window.location.replace("./index.html");
        },2000);
    } else if(user == "" || password == "") {
        err.classList.remove("visually-hidden");
        document.getElementById("err").textContent = "No debe haber campos vacios";
        return false;
    } else if(user !== getName) {
        document.getElementById("err").textContent = "Usuario incorrecto";
    } else {
        document.getElementById("err").textContent = "Contraseña incorrecta";
    }
}

// Aqui comienza el Carrito de Compras
class Bikes {
    constructor(name, price) {
        this.name = name,
        this.price = price;
    }
}

// Instanciando la clase Bikes
const bikeOne = new Bikes("Trinx Free 2.0", 81000);
const bikeTwo = new Bikes("Spy Ridder Mujer", 65000);
const bikeThree = new Bikes("SPY Bullet 29", 70000);
const bikeFour = new Bikes("Spy Trick 26", 73000);
const bikeFive = new Bikes("Stark Amsterdam Shimano", 81000);
const bikeSix = new Bikes("Trinx Free 2.0 Híbrida", 44800);
const bikeSeven = new Bikes("Trinx D700 Pro", 115000);
const bikeEight = new Bikes("Gravel Rodado 700 Trinx Climber", 81000);
const bikeNine = new Bikes("Raleigh 2.0 Rodado 29", 67000);

// Hay que resumir esto con una estructura de repeticion n.n
const buttonBike1 = document.getElementById("1").addEventListener('click', () => addCart(bikeOne));
const buttonBike2 = document.getElementById("2").addEventListener('click', () => addCart(bikeTwo));
const buttonBike3 = document.getElementById("3").addEventListener('click', () => addCart(bikeThree));
const buttonBike4 = document.getElementById("4").addEventListener('click', () => addCart(bikeFour));
const buttonBike5 = document.getElementById("5").addEventListener('click', () => addCart(bikeFive));
const buttonBike6 = document.getElementById("6").addEventListener('click', () => addCart(bikeSix));
const buttonBike7 = document.getElementById("7").addEventListener('click', () => addCart(bikeSeven));
const buttonBike8 = document.getElementById("8").addEventListener('click', () => addCart(bikeEight));
const buttonBike9 = document.getElementById("9").addEventListener('click', () => addCart(bikeNine));

// const buttonPay = document.querySelector("#pay");
// buttonPay.addEventListener('click', cartPrice());

const cart = [];

function addCart({name, price}) {
    cart.push(price); 
    let err = document.getElementById("err");
    err.classList.remove("visually-hidden")
    err.textContent = `${name} se agrego al carrito`;
}

function removeCart({name, price}) { 
    cart.pop(price);
}

function cartPrice() {
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        total += cart[i]
    }
    document.getElementById("total").textContent = total;
    document.getElementById("successfull").innerHTML = "La compra fue realizada con exito";
}


// const imgCart = document.getElementById("imgCart").addEventListener('click', () => viewCart())

// function viewCart(){

// }


// Seccion de Accesorios
class Accessories {
    constructor(name, price) {
        this.name = name,
        this.price = price;
    }
}

// Instanciando la Clase Accessories
const accessory1 = new Accessories("", "");
const accessory2 = new Accessories("", "");
const accessory3 = new Accessories("", "");
const accessory4 = new Accessories("", "");
const accessory5 = new Accessories("", "");
const accessory6 = new Accessories("", "");
const accessory7 = new Accessories("", "");
const accessory8 = new Accessories("", "");
const accessory9 = new Accessories("", "");

const buttonAccessory1 = document.getElementById("accessory1").addEventListener(() => addCart(accessory1));
const buttonAccessory2 = document.getElementById("accessory2").addEventListener(() => addCart(accessory2));
const buttonAccessory3 = document.getElementById("accessory3").addEventListener(() => addCart(accessory3));
const buttonAccessory4 = document.getElementById("accessory4").addEventListener(() => addCart(accessory4));
const buttonAccessory5 = document.getElementById("accessory5").addEventListener(() => addCart(accessory5));
const buttonAccessory6 = document.getElementById("accessory6").addEventListener(() => addCart(accessory6));
const buttonAccessory7 = document.getElementById("accessory7").addEventListener(() => addCart(accessory7));
const buttonAccessory8 = document.getElementById("accessory8").addEventListener(() => addCart(accessory8));
const buttonAccessory9 = document.getElementById("accessory9").addEventListener(() => addCart(accessory9));


// const buttons = document.querySelectorAll("buttonAccessory");
// buttons.forEach(item => {
//     addEventListener('click', () => addCart())
// });

const cartAccessories = [];

function addCartAccessories({name, price}) {
    cartAccessories.push(price);
}

function cartRemoveAccessories() {
    cartAccessories.pop();
}