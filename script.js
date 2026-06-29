// =============================
// LETTER POPUP
// =============================

document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("letterPopup");
    const btn = document.getElementById("letterBtn");
    const closeBtn = document.querySelector(".close");

    // Buka surat
    btn.addEventListener("click", () => {
        popup.classList.add("show");
    });

    // Tutup surat
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });

    // Klik di luar surat
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("show");
        }
    });

});


// =============================
// MEMORIES BUTTON
// =============================

function bukaHadiah() {

    const gallery = document.getElementById("gallerySection");

    gallery.style.display = "block";

    window.scrollTo({
        top: gallery.offsetTop,
        behavior: "smooth"
    });

}


// =============================
// BALLOON
// =============================

const balloons = document.querySelectorAll(".draggable");

balloons.forEach(balloon => {

    let dragging = false;

    let offsetX = 0;
    let offsetY = 0;

    let speed = 1 + Math.random() * 1.5;

    let x = Math.random() * (window.innerWidth - 60);
    let y = window.innerHeight + Math.random() * 300;

    balloon.style.left = x + "px";
    balloon.style.top = y + "px";
    balloon.style.animation = "none";

    function animate() {

        if (!dragging) {

            y -= speed;

            x += Math.sin(Date.now() / 700 + speed) * 0.5;

            if (y < -100) {

                y = window.innerHeight + 100;
                x = Math.random() * (window.innerWidth - 60);

            }

            balloon.style.left = x + "px";
            balloon.style.top = y + "px";

        }

        requestAnimationFrame(animate);

    }

    animate();

    balloon.addEventListener("pointerdown", (e) => {

        dragging = true;

        offsetX = e.clientX - x;
        offsetY = e.clientY - y;

        balloon.style.cursor = "grabbing";

        balloon.setPointerCapture(e.pointerId);

    });

    balloon.addEventListener("pointermove", (e) => {

        if (!dragging) return;

        x = e.clientX - offsetX;
        y = e.clientY - offsetY;

        balloon.style.left = x + "px";
        balloon.style.top = y + "px";

    });

    balloon.addEventListener("pointerup", () => {

        dragging = false;

        balloon.style.cursor = "grab";

    });

});
