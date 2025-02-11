(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Aseli Tak nak?",
    "Pwlisss laa, Nak yak??",
    "Ancritt beliau Nak je laa?",
    "Pelissss banh...",
    "Coba di pikir-pikir🤓, masih tak nak keh?",
    "Jika Tak Nak, Gwehj jadi send boy aseli...",
    "Real inih mah Hemmmzz...",
    "ALLAHUAKBAR, Ku Traktirin...",
    "Ywdh sih wir 😂, Tak Nak Tak Pa...",
    "Bercanda Nnti Gwehj traktir Mie Ayam, Jadi Nak Je laa! 😋☝️😓"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "page2.html"; // Pindah ke halaman Web 2
}
