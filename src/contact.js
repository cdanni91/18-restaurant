function CreateContactModule() {


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


    function executeContact() {

        const contactFactory = CreateContactModule();
        const contentElement = contactFactory.getElement(".content");
        contactFactory.logContent(contentElement);
        const contactElement = contactFactory.createDivElement("contact");
        contactFactory.appendChildToElement(contentElement,contactElement);


        // home elements
        const firstElement = contactFactory.createDivElement("first");
        firstElement.textContent = "PRIMERA PAG INTRODUCCION";
        const secondElement = contactFactory.createDivElement("second");
        secondElement.textContent = "PRIMERA PAG CONTENIDO";
        const thirdElement = contactFactory.createDivElement("third");
        thirdElement.textContent = "PRIMERA PAG FOOT";
        contactFactory.appendChildToElement(contactElement,firstElement);
        contactFactory.appendChildToElement(contactElement,secondElement);
        contactFactory.appendChildToElement(contactElement,thirdElement);

    }



    return {logContent,
            createDivElement,
            getElement,
            appendChildToElement,
            executeContact}
}

export {CreateContactModule}