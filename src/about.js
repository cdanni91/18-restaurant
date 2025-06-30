import { FunctionFactory } from "./shared";

function CreateAboutModule() {

    const aboutFactory = FunctionFactory();
    const contentElement = aboutFactory.getElement(".content");
    const aboutElement = aboutFactory.createElement("div","about");
    

    const aboutElements = [   ["div","title","titleElement","Acerca de Emanuelito's"], 
                                ["div","description", "descriptionElement","Maaaaaaaaaaaaaaaaama MIIIIIA"], 
                                ["div","hours","hoursElement","No te olvides de volver"]
                        ]

        

    function executeAbout() {
        // create the home element and append the home element
        aboutFactory.removeElementHTML(contentElement);
        aboutFactory.appendChildToElement(contentElement,aboutElement);
        // home elements
        aboutFactory.createElementsFromArray(aboutElements, aboutElement);
    }



    return {executeAbout}
}

export {CreateAboutModule}