// Display the saved profile info and settings
export function displayProfile(user, memory, grid) {
	const $image = document.getElementById("memoryImg");

	document.getElementById("profileUserName").textContent = user.username;
	document.getElementById("profileEmail").textContent = user.email;

	if (user.memory) {
		memory.value = user.memory;
	}
	if (user.grid) {
		grid.value = user.grid;
	}

	switchImg(memory, $image);
	memory.addEventListener("change", () => {
		switchImg(memory, $image);
	});
}

function switchImg(memory, $image) {
	switch (memory.value) {
		case "animauxAnimes":
			$image.setAttribute("src", "assets/img/animauxAnimes/memory_detail_animaux_animes.png");
			break;
		case "chiens":
			$image.setAttribute("src", "assets/img/chiens/memory_details_chiens.png");
			break;
		default:
			$image.setAttribute("src", "assets/img/animauxAnimes/memory_detail_animaux_animes.png");
			break;
	}
}