let toDoes = Array.from(document.querySelectorAll("li"));

function validToDoes(a) {
  return toDoes.includes(a);
}

function showError(i) {
  createError(i);
  errorEmphasize(i);
}

function createError(i) {
  const errorDiv = document.createElement("div");
  errorDiv.setAttribute("id", "errorMsg");
  const p = document.createElement("p");
  p.setAttribute("id", "errorText");
  const errorTextNode = document.createTextNode(
    `'${i}' is already in your list!`
  );
  p.appendChild(errorTextNode);
  errorDiv.appendChild(p);
  document.querySelector("#submit").after(errorDiv);
  setTimeout(() => {
    document.querySelector("#errorMsg").remove();
  }, 3000);
}

function errorEmphasize(i) {
  const list = Array.from(document.querySelectorAll("li"));
  let index;
  list.forEach((value) => {
    if (value.innerText == `${i}`) {
      index = list.indexOf(value);
    }
  });
  const li = document.getElementsByTagName("li");
  li[index].setAttribute("id", "errorLi");
  //   li[index].outerHTML = `<li id=\"errorLi\">${i}</li>`;
  setTimeout(() => {
    let errorElement = document.querySelector("#errorLi");
    errorElement.removeAttribute("id");
  }, 1000);
}

function addToDoToList(index, i) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.classList.add("new");
  li.appendChild(document.createTextNode(`${i}`));
  ul.insertBefore(li, ul.children[index]);
}

function removeNewClass(item) {
  if (item) {
    item.classList.remove("new");
  }
}

document.getElementById("submit").addEventListener("click", () => {
  let item = document.getElementById("toDo").value;
  document.getElementById("toDo").value = "";
  item = item.charAt(0).toUpperCase() + item.slice(1);

  if (validToDoes(item)) {
    showError(item);
  } else {
    removeNewClass(document.querySelector(".new"));
    toDoes.push(item);
    toDoes.sort();
    let index = toDoes.indexOf(item);
    addToDoToList(index, item);
  }
});
