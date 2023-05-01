let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let a = document.querySelector("a");

for(let i = 0; i < 2; i++){
    h1.innerText = h1.innerText + ` iteration #${i + 1}`;
}

for (let i = 0; i < 4; i++) {
    p.innerText = `iteration #${i + 1} ` + p.innerText;
}

for (let i = 0; i < 7; i++) {
    a.innerText = `Iteration #${i + 1}`;
}