function jumpControl(e) {
    e.preventDefault();
    jump();
}

// клавиатура
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") jump();
});

// мышка
document.addEventListener("mousedown", jumpControl);

// палец (телефон)
document.addEventListener("touchstart", jumpControl, { passive:false });
