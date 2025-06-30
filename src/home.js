import { FunctionFactory } from "./shared";

function CreateHomeModule() {

    const homeFactory = FunctionFactory();
    const contentElement = homeFactory.getElement(".content");
    const homeElement = homeFactory.createElement("div","home");
    

    const homeElements = [  ["div","title","titleElement","Bienvenido a la tienda EMANUELITO'S donde se sirve le mejor CHICKEN GUMBO"], 
                            ["div","description", "descriptionElement","Bienvenido a El Rincón del Sabor, donde cada plato cuenta una historia y cada visita se convierte en un recuerdo. Ubicados en el corazón de Rosario, nos enorgullecemos de ofrecer una experiencia culinaria única, combinando la tradición argentina con toques de innovación. Nuestros ingredientes frescos y de estación son cuidadosamente seleccionados para garantizar sabores auténticos y memorables. Desde nuestras empanadas caseras hasta nuestros jugosos cortes de carne a la parrilla, pasando por opciones vegetarianas creativas y postres irresistibles, hay algo para cada paladar. Disfrute de un ambiente cálido y acogedor, perfecto para una cena familiar, una reunión con amigos o una velada romántica. ¡Esperamos verte pronto!"], 
                            ["div","hours","hoursElement","Lunes a Viernes: 09:00 a 18:00"]
                        ]

        

    function executeHome() {
        // create the home element and append the home element
        homeFactory.removeElementHTML(contentElement);
        homeFactory.appendChildToElement(contentElement,homeElement);
        // home elements
        homeFactory.createElementsFromArray(homeElements, homeElement);
    }



    return {executeHome}
}

export {CreateHomeModule}