import { loadHeader, loadMain, loadFooter } from "./loadPage.js";

const contentDiv = document.getElementById('content');

contentDiv.appendChild(loadHeader());
contentDiv.appendChild(loadMain());
contentDiv.appendChild(loadFooter());

