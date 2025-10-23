import { storageAvailable } from "./storageChecker.js";
import { checkLogin } from "./checkLogin.js";

const password = document.getElementById("userPassword");
const email = document.getElementById("userEmail");
const form = document.getElementById("formLogin");

checkLogin(); // Check if there is a logged user

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (storageAvailable("localStorage")) { // If the localStorage can be used  
        if (localStorage.getItem("userArray")) { // If there are users stored
            const userArray = JSON.parse(localStorage.getItem("userArray")); // Parse the user array stored
            
            for (const user of userArray) {     
                if (user.email == email.value) { // If there is a match of email in stored users
                    if (user.password == password.value) { // If there is also a match in passwords
                        // Store the user in the session storage
                        sessionStorage.setItem("user", JSON.stringify(user));
                        alert("Connection réussie !");
                        globalThis.location.href = "../index.html";
                    } else {
                        alert("Mot de passe incorrect.");
                        break;
                    }
                } else {
                    const choice = confirm("Aucun compte n'est lié à cette adresse e-mail, voulez-vous en créer un ?");
                    if (choice) {
                        globalThis.location.href = "../inscription.html";
                    }
                }
            }
        } else { // If there isnt a user stored, redirect the user to register
            globalThis.location.href = "../inscription.html";
        }
    }
})