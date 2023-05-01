const container = document.querySelector(".container");
const box = document.querySelector(".box");
let width = container.offsetWidth;
let height = container.offsetHeight;
let domBoxRect = box.getBoundingClientRect();
let boxTop = domBoxRect.y;
let boxLeft = domBoxRect.x;
let cachedBoxLeft;
let cachedBoxTop;

container.addEventListener("wheel", (event) => {
  //console.log(width, height);
  //console.log(event.deltaY+ ' '+event.deltaX);
  //  console.log(box.getBoundingClientRect());
  
  domBoxRect = box.getBoundingClientRect();
  boxTop = domBoxRect.y + event.deltaY;
  boxLeft = domBoxRect.x + event.deltaX;

    if(hitsBoundaryY(boxTop)) {
        // fucked
        box.style.top = cachedBoxTop + "px";
    } else {
        box.style.top = boxTop + "px";
        cachedBoxTop = boxTop;
    }
    if(hitsBoundaryX(boxLeft)) {
        // fucked
        box.style.left = cachedBoxLeft + "px";
    } else {
        box.style.left = boxLeft + "px";
        cachedBoxLeft = boxLeft;
    }
 
});

function hitsBoundary(top, left) {

    if(hitsBoundaryX(left)) {
        return true;
    }
    if(hitsBoundaryY(top)) {
        return true;
    }

}

function hitsBoundaryX(left) {
    if((left + box.offsetWidth) > width || left < 0) {
        return true;
    }

    return false;
}

function hitsBoundaryY(top) {
    if((top + box.offsetHeight) > height || top < 0) {
        return true;
    }

    return false;
}

function moveBox(event) {

    box.style.top = event.clientY + "px";
    box.style.left = event.clientX + "px";

   console.log('clicked ',event.clientY,event.clientX);
}

container.addEventListener("click", moveBox);