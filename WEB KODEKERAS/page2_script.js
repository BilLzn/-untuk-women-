function nextPage() {
    window.location.href = "yes.html"; // Mengarahkan ke halaman "yes.html"
}

function moveButton() {
    const noButton = document.getElementById("noButton");

    // Mendapatkan ukuran jendela
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Menghasilkan posisi acak dalam batas layar
    const newX = Math.random() * (windowWidth - noButton.clientWidth);
    const newY = Math.random() * (windowHeight - noButton.clientHeight);

    // Menetapkan posisi baru
    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}
