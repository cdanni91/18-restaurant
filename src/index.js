//import { create } from "domain"; // it breaks the serve no se pq aparecio
import "./styles.css";

import {CreateHomeModule} from "./home"
import {CreateContactModule} from "./contact"



const homeButton = document.querySelector("#homeButton");

// landing
const landing = CreateHomeModule();
landing.executeHome();



// buttons
homeButton.addEventListener("click", () => {

    const homeFactory = CreateHomeModule();
    homeFactory.executeHome();

})

const contactButton = document.querySelector("#contactButton");

contactButton.addEventListener("click",() => {

    const contactFactory = CreateContactModule();
    contactFactory.executeContact();
})


const aboutButton = document.querySelector("#aboutButton");

aboutButton.addEventListener("click",() => {

    const factory = CreateHomeModule();
    

})
