//import { create } from "domain"; // it breaks the serve no se pq aparecio
import "./styles.css";

function CreateHomeModule() {

    const contentElement = document.querySelector(".content");


    function logContent (content) {

        console.log(content);
    }

    function createMainElement() {

        const mainElement = document.createElement("div");
        mainElement.classList.add("home");

        return mainElement
    }

    function appendElementToContent(child) {

        contentElement.appendChild(child);
    }



    return {logContent,
            createMainElement,
            appendElementToContent}
}


const home = CreateHomeModule();
const mainElement = home.createMainElement();
home.logContent(mainElement);
home.appendElementToContent(mainElement);

