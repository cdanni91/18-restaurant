function CreateHomeModule() {


    function logContent(content) {

        console.log(content);
    }

    function getElement(querySelector) {

        const element = document.querySelector(querySelector);

        return element;

    }

    function createDivElement(elementName) {

        const newElement = document.createElement("div");
        newElement.classList.add(elementName);

        return newElement;
    }

    function appendChildToElement(element,child) {
        element.appendChild(child);
    }


    function executeHome() {

        const homeFactory = CreateHomeModule();
        const contentElement = homeFactory.getElement(".content");
        homeFactory.logContent(contentElement);
        const homeElement = homeFactory.createDivElement("home");
        homeFactory.appendChildToElement(contentElement,homeElement);


        // home elements
        const firstElement = homeFactory.createDivElement("first");
        firstElement.textContent = "PRIMERA PAG INTRODUCCION";
        const secondElement = homeFactory.createDivElement("second");
        secondElement.textContent = "PRIMERA PAG CONTENIDO";
        const thirdElement = homeFactory.createDivElement("third");
        thirdElement.textContent = "PRIMERA PAG FOOT";
        homeFactory.appendChildToElement(homeElement,firstElement);
        homeFactory.appendChildToElement(homeElement,secondElement);
        homeFactory.appendChildToElement(homeElement,thirdElement);

    }



    return {logContent,
            createDivElement,
            getElement,
            appendChildToElement,
            executeHome}
}

export {CreateHomeModule}