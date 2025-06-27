//import { create } from "domain"; // it breaks the serve no se pq aparecio
import "./styles.css";

import {CreateHomeModule} from "./home"




const homeFactory = CreateHomeModule();
homeFactory.executeHome();
