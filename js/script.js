console.log("Javascript is Running");

function validateForm() {
    // Ambil DOM dari id "name-input" di HTML
    const nameInput = document.getElementById("name-input");

    if (nameInput.value == '') {
        // Action ketika value kosong
        alert('Harap untuk isi nama anda');
    } else {
        // Action ketika value tidak kosong
        alert(`Hai ${nameInput.value}`);
    }
}

let indexBanner = 0;

showBanner();

/// Increment index
function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    // DOM Banner
    const listImage = document.getElementsByClassName("banner-img");

    // Reset index
    if (indexBanner > listImage.length - 1) {
        indexBanner = 0;
    }

    /// Looping to hide all banner
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }

    listImage[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);