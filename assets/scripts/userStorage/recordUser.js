import { storageAvailable } from "./storageChecker.js";


export function recordUser(form) {
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    let userArray = [];
    let checkSimilarUser = 0;

    if (storageAvailable("localStorage")) {
        if (localStorage.getItem("userArray")) {

            userArray = JSON.parse(localStorage.getItem("userArray")); // Parse the user array stored

            for (const u of userArray) { // Check if email or name is taken
                if (u.username == user.username || u.email == user.email) {
                    checkSimilarUser = 1;
                    alert("Ce nom d'utilisateur ou cet adresse-email est déjà lié à un compte.");
                    break;
                }
            }
            if (checkSimilarUser === 0) {
                userArray.push(user); // Add the new user to the array
                localStorage.setItem("userArray", JSON.stringify(userArray)); // Store the result
                success(form); // Tell the user
            }
            
        } else { // If there isnt any user stored
            userArray.push(user);
            localStorage.setItem("userArray", JSON.stringify(userArray));
            success(form);
        }
    }
}

const success = (form) => {
    alert("Votre compte à bien été crée ! Vous pouvez à présent vous connecter.");
    globalThis.location.href = "../connection.html";
}