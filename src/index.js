import { loadHeader, loadMain, fillMain, loadFooter } from "./loadPage.js";
import { loadMenu } from "./loadMenu.js";
import { loadContactPage } from "./loadContact.js";

const contentDiv = document.getElementById('content');
// const mainDiv = document.createElement('main');
contentDiv.appendChild(loadHeader());
contentDiv.appendChild(loadMain());
const mainDiv = document.querySelector('main');
const { sectionHero, sectionFeaturedItems } = fillMain();
mainDiv.appendChild(sectionHero);
mainDiv.appendChild(sectionFeaturedItems);
// contentDiv.appendChild(mainDiv);
contentDiv.appendChild(loadFooter());







document.addEventListener("DOMContentLoaded", () => {
    // mainDiv.appendChild(fillMain());
    // const footer = document.querySelector('footer');
    const homeButton = document.getElementById('Home');
    const menuButton = document.getElementById('Menu');
    const contactButton = document.getElementById('Contact');
    // const menuTab = document.querySelector('.menu-tab');

    homeButton.addEventListener('click', loadMain2);
    function loadMain2() {
        mainDiv.innerHTML = ``;
        mainDiv.appendChild(sectionHero);
        mainDiv.appendChild(sectionFeaturedItems);
        // mainDiv.appendChild(fillMain());
        // mainDiv.style.display = "none";
        // footer.style.display = "none";
        //mainDiv.innerHTML = ``;
        // footer.style.display = "none";
        // menuTab.innerHTML = ``;
        // contentDiv.appendChild(loadMain());
        // contentDiv.appendChild(loadFooter());
    }



    menuButton.addEventListener('click', loadMenu2);
    function loadMenu2() {
        mainDiv.innerHTML = ``;
        mainDiv.appendChild(loadMenu());
        // footer.style.display = "block";
        // menuTab.innerHTML = ``;
        // footer.insertAdjacentElement("beforebegin", loadMenu());
        // contentDiv.appendChild(loadMenu());
    }

    contactButton.addEventListener('click', loadContact2);
    function loadContact2() {
        mainDiv.innerHTML = ``;
        mainDiv.appendChild(loadContactPage());
        // footer.style.display = "block";

    }


    // navigationBar.addEventListener('click', (e) => {
    //     if (e.target.id = "Menu") {
    //         console.log(e);
    //         mainDiv.TextContent = "";
    //         mainDiv.appendChild(loadMenu());
    //     } else if (e.target.id = "Contact") {
    //         mainDiv.TextContent = "";
    //         mainDiv.appendChild(loadContactPage());
    //     } else if (e.target.id = "Home") {
    //         return;
    //     }
    // })
})




// TO DO: Add loadMenu to the switch function
