const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const userId = document.querySelector("#userId");

//const var
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginFormSubmit(event) {
    event.preventDefault(); // prevent page refresh
    const typedUsername = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,typedUsername);
    paintGreetings(typedUsername);
}
function paintGreetings(username) {
    userId.classList.remove(HIDDEN_CLASSNAME);
    userId.innerText=`Hello! ${username}`;
}



const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginFormSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
}