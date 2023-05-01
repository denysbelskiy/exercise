const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
// const button = document.querySelector(".button");

box1.addEventListener("click", (e) => {
    // e.target
    console.log(e);
    e.target.style.backgroundColor = "#556699";
});

window.addEventListener("resize", () => {
    box2.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
});

window.addEventListener('load', () => {
    box2.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
});
