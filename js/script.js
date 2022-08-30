const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const baseColor = document.getElementById("baseColor");
const root = document.querySelector(":root")

spacing.addEventListener("input", (e) => {
    root.style.setProperty("--spacing", `${e.target.value}px`);
});

blur.addEventListener("input", (e) => {
    root.style.setProperty("--blur", `${e.target.value}px`);
});

baseColor.addEventListener("input", (e) => {
    root.style.setProperty("--color", `${e.target.value}`);
})