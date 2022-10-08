const USERNAME = document.getElementById('username');
const PASSWORD = document.getElementById('password');
const BTN_LOGIN = document.getElementById('button');
const SESION = document.getElementById('close-session');

const userArray = [
    {
        "user": "juan",
        "password": "juan",
        "email": "juan@gmail.com"
    },
    {
        "user": "fer",
        "password": "fer",
        "email": "fer@gmail.com"
    },
    {
        "user": "matias",
        "password": "matias",
        "email": "matias@gmail.com"
    },
    {
        "user": "lucas",
        "password": "lucas",
        "email": "lucas@gmail.com"
    },
    {
        "user": "elias",
        "password": "elias",
        "email": "elias@gmail.com"
    }];

    

/**
 * It takes a user and password, and returns true if the user and password match a user in the
 * userArray, and false if they don't.
 * @param user - the username
 * @param pass - the password that the user entered
 * @returns A boolean value.
 */
function verifyUser(user,pass){
    let indice = 0;
    let verify = false;
    userArray.forEach(element => {
        if(user == element.user && pass == element.password){
            verify = true;
            console.log("true");
            return true;
        }
        indice++
    });
     if (indice == userArray.length && verify == false){
         verify = false;
     }
    return verify;
}
BTN_LOGIN.addEventListener('click', (e) => {
    e.preventDefault();
    if ((USERNAME.value == "") || (PASSWORD.value == "")){
        alert("Debe ingresar los datos para poder conectarse.");
    }else{
        if (!verifyUser(USERNAME.value,PASSWORD.value)){
            alert("Usuario o contraseña incorrectos.");
        }else{
            let user_log = {
                "user": USERNAME.value,
                "password": PASSWORD.value,
                "log": true
            }

            localStorage.setItem("log",JSON.stringify(user_log));
            SESION.classList.remove('ocultar');
            location.href = "../index.html";
        }
    }
});