// find ul in DOM to add list item to list 
// check for click event on button 
// call function to add new list item 

const list = document.querySelector("ul");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const body = document.querySelector("body");

//btn.onclick = addFavourite;

btn.addEventListener("click", addFavourite);
//btn.addEventListener("click", function(){ ... });

function addFavourite () {
    if (input.value.length > 0) {
        if(isDuplicate()) {
            //one of the posible solutions :(list.includes(input.value))
            //do not add, give a messadge insead
            console.log("Duplicate was found");
            //create p tag
            let msg = document.createElement("p");
            body.appendChild(msg);
            //use some method, like innerHTML, to add the message
            msg.textContent = "Duplicates will not be added to the list"
        }
        else {
            //create element li 
            let li = document.createElement("li");
            //add input value to it
            li.textContent = input.value;
            //add list item to our list in the DOM
            list.appendChild(li);
        }

    } else {
        console.log("my value is empty :(")
    }
}

function isDuplicate(){
    let result = false;
    //loop through list items and check if value is equal to our input value
    //find the list items, use forEach to find value of each item
    list.querySelectorAll("li").forEach(function (item){
        if(item.textContent.toLowerCase().trim() === input.value.toLowerCase().trim()){
            result = true;
        }
    });

    return result;
}