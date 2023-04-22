import { userList } from "./scripts/users.js";
import { userListChange } from "./scripts/secondImgOfUsers.js";
import {changePhoto} from "./scripts/changeImg.js"

const render = (pUserList, pSelector) => {
  let userListTemplate = pUserList.map((user) => {
    return `<div>
          <h1>${user.name}</h1>
          <img src="${user.img}" alt="" id="${user.name}">
          </div>`;
  });

  document.querySelector(pSelector).innerHTML = userListTemplate;
};

render(userList, "main");
changePhoto()