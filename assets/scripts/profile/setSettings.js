// Change the user's settings on demand
export function setSettings(user, memory, grid) {
    const btn = document.getElementById("saveBtn"); // Get the save btn
    const userID = JSON.parse(sessionStorage.getItem("userID")); // Get the userID
    let userObject = JSON.parse(localStorage.getItem("userArray"))[userID]; // Get the userArray

    btn.addEventListener("click", () => {
        if (memory.value == "animauxAnimes" && grid.value != "4 * 3") {
            alert("Erreur, ce memory n'est pas utilisable avec cette taille !");
        } else {
            user.memory = memory.value; // Assign the new values
            user.grid = grid.value;

            sessionStorage.setItem("user", JSON.stringify(user)); // Store the new values in logged user

            userObject = user; // Also store in local storage
            localStorage.setItem("userArray", JSON.stringify(userObject));
            
            alert("Vos choix ont étés enregistrés."); // Let the user know
        }
    })
}