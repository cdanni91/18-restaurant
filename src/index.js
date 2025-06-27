//import { create } from "domain"; // it breaks the serve no se pq aparecio
import "./styles.css";

function CreateHomeModule() {

    const contentElement = document.querySelector(".content");


    function logContent (content) {

        console.log(content);
    }

    function createHomeElement() {

        const homeElement = document.createElement("div");
        homeElement.classList.add("home");

        return homeElement
    }

    function appendElementToContent(child) {

        contentElement.appendChild(child);
    }





    return {logContent,
            createHomeElement,
            appendElementToContent}
}


const home = CreateHomeModule();
const homeElement = home.createHomeElement();
home.logContent(homeElement);
home.appendElementToContent(homeElement);

