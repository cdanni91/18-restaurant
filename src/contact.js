import { FunctionFactory } from "./shared";

function CreateContactModule() {

    function executeContact() {

        const contactFactory = FunctionFactory();
        const contentElement = contactFactory.getElement(".content");
        contactFactory.removeElementHTML(contentElement);
        
        const contactElement = contactFactory.createElement("div","contact");
        contactFactory.appendChildToElement(contentElement,contactElement);


        // contact elements
        const firstElement = contactFactory.createElement("div","first");
        firstElement.textContent = "PRIMERA PAG INTRODUCCION";
        const secondElement = contactFactory.createElement("div","second");
        secondElement.textContent = "PRIMERA PAG CONTENIDO";
        const thirdElement = contactFactory.createElement("div","third");
        thirdElement.textContent = "PRIMERA PAG FOOT";
        contactFactory.appendChildToElement(contactElement,firstElement);
        contactFactory.appendChildToElement(contactElement,secondElement);
        contactFactory.appendChildToElement(contactElement,thirdElement);

    }



    return {executeContact}
}

export {CreateContactModule}