import { RockInRio } from "./src/ProjetoRockinRio";
import { EspaçoFavela } from "./src/EspaçoFavela";
import { PalcoMundo } from "./src/PalcoMundo";
import { PalcoSunSet } from "./src/PalcoSunset";


let palcomundo1 = new PalcoMundo ("08/09/2022", 500, "15:00", "Tchutchuquinha do pop");
let palcosunset1 = new PalcoSunSet ("09/09/2022", 500, "19:00", "Restart");
let espacofavela1 = new EspaçoFavela ("10/09/2022", 500, "16:00", "Bonde do Tigrão");

console.log (`Palco Mundo`);
palcomundo1.showsexta();
palcomundo1.ingressosexta();
console.log (`Palco Sunset`);
palcosunset1.showsabado();
palcosunset1.ingressosabado();
console.log (`Espaço Favela`);
espacofavela1.showdomingo();
espacofavela1.ingressodomingo();

