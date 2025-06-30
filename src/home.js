import { FunctionFactory } from "./shared";

function CreateHomeModule() {

    function executeHome() {

        const homeFactory = FunctionFactory();
        const contentElement = homeFactory.getElement(".content");
        homeFactory.removeElementHTML(contentElement);
        
        const homeElement = homeFactory.createElement("div","home");
        homeFactory.appendChildToElement(contentElement,homeElement);


        // home elements
        const firstElement = homeFactory.createElement("div","first");
        firstElement.textContent = "PRIMERA PAG INTRODUCCION";
        const secondElement = homeFactory.createElement("div","second");
        secondElement.textContent = "PRIMERA PAG CONTENIDO";
        const thirdElement = homeFactory.createElement("div","third");
        thirdElement.textContent = "PRIMERA PAG FOOT";
        homeFactory.appendChildToElement(homeElement,firstElement);
        homeFactory.appendChildToElement(homeElement,secondElement);
        homeFactory.appendChildToElement(homeElement,thirdElement);

    }



    return {executeHome}
}

export {CreateHomeModule}