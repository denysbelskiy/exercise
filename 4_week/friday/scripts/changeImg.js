import { userListChange } from "./secondImgOfUsers.js";
import { userList } from "./users.js";
export function changePhoto() {
  let photoChange = document.getElementsByTagName("img");

  Array.from(photoChange).forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      let imgId = element.id;
      userListChange.forEach(item => {
        if (imgId == item.name) {
            element.src = item.img;
        }
      });
    });
    element.addEventListener("mouseleave", (event) => {
        let imgId = element.id;
        userList.forEach(item => {
          if (imgId == item.name) {
              element.src = item.img;
          }
        });
    });
  });
}
