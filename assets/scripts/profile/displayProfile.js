// Display the saved profile info and settings
export function displayProfile(user, memory, grid) {
    const image = document.getElementById("memoryImg"); // Get the memory img

    // Display the user data in profile
    document.getElementById("profileUserName").textContent = user.username;
    document.getElementById("profileEmail").textContent = user.email;

    // Display the user's settings
    if (user.memory) {
        memory.value = user.memory; // Display the right selected value and image
    }
    if (user.grid) {
        grid.value = user.grid;
    }

    // Display the memory image
    switchImg(memory, image);
    memory.addEventListener("change", () => {
        switchImg(memory, image);
    })
}

function switchImg(memory, image) {
    switch (memory.value) { // Set the image to fit the selected choice
        case "animauxAnimes":
            image.setAttribute("src", "assets/img/animauxAnimes/memory_detail_animaux_animes.png");
            break;
        case "chiens":
            image.setAttribute("src", "assets/img/chiens/memory_details_chiens.png");
            break;
        default:
            image.setAttribute("src", "assets/img/animauxAnimes/memory_detail_animaux_animes.png");
            break;
    }
}
