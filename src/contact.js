import { FunctionFactory } from "./shared";

function CreateContactModule() {

    const contactFactory = FunctionFactory();
    const contentElement = contactFactory.getElement(".content");
    const contactElement = contactFactory.createElement("div","contact");
    

    const contactElements = [   ["div","title","titleElement","Ponete en contacto con Emanuelito's"], 
                                ["div","description", "descriptionElement","Whatsapp: 034423434"], 
                                ["div","hours","hoursElement","Lunes a Viernes: 09:00 a 18:00"]
                        ]

        

    function executeContact() {
        // create the home element and append the home element
        contactFactory.removeElementHTML(contentElement);
        contactFactory.appendChildToElement(contentElement,contactElement);
        // home elements
        contactFactory.createElementsFromArray(contactElements, contactElement);
    }



    return {executeContact}
}

export {CreateContactModule}