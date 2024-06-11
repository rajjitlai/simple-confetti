document.getElementsByClassName("confetti-button")[0].addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    let confetti_button = confetti.create(canvas, { resize: true });

    confetti_button({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 5000);
});
