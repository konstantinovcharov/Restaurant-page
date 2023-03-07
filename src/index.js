import { loadHeader, loadMain, loadFooter } from "./loadPage.js";
import { loadMenu } from "./loadMenu.js";
import { loadContactPage } from "./loadContact.js";

const contentDiv = document.getElementById('content');


document.addEventListener("DOMContentLoaded", () => {
    contentDiv.appendChild(loadHeader());
    contentDiv.appendChild(loadMain());
    contentDiv.appendChild(loadFooter());

    // const navigationBar = document.querySelector('nav');
    // navigationBar.addEventListener('click', (e) => {
    //     if (e.target.id = "Menu") {
    //         mainDiv.innerHTML = "";
    //         mainDiv.appendChild(loadMenu());
    //     } else if (e.target.id = "Contact") {
    //         mainDiv.innerHTML = "";
    //         mainDiv.appendChild(loadContactPage());
    //     } else if (e.target.id = "Home") {
    //         return;
    //     }
    // })
})




// TO DO: Add loadMenu to the switch function
