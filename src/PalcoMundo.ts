import { RockInRio } from "./ProjetoRockinRio";
export class PalcoMundo extends RockInRio{
    
    horarios: string;
    artistas: string;

    constructor (
    data: string,
    ingresso: number,
    horarios: string,
    artistas: string,
){
    super(data, ingresso);
    this.horarios = horarios
    this.artistas = artistas

}
showsexta(): void {
    console.log (`As informações sobre o show de sexta-feira são: 
    Data: ${this.data}
    Artista do dia: ${this.artistas}
    Horário: ${this.horarios}`)
}
ingressosexta(): void {
    console.log (`O preço do ingresso de sexta-feira é: ${this.ingresso} reais`)
}
}