import { RockInRio } from "./ProjetoRockinRio";
 export class EspaçoFavela extends RockInRio{
    Horario:string;
    Artistas:string;

    constructor(
    data:string,
    ingresso:number,
    Horario:string,
    Artistas:string,
    
    

    ){
        super(data, ingresso);
        this.Horario = Horario
        this.Artistas = Artistas
    }
    showdomingo(): void {
        console.log (`As informações sobre o show de domingo é: 
        Data: ${this.data}
        Artista do dia: ${this.Artistas}
        Horário: ${this.Horario}`)
    }
    ingressodomingo(): void {
        console.log (`O preço do ingresso de sábado é: ${this.ingresso} reais`)
    }
}