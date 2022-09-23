import { RockInRio } from "./ProjetoRockinRio";
export class PalcoSunSet extends RockInRio{

    horario: string;
    artista: string;

    constructor (
    data: string,
    ingresso: number,
    horario: string,
    artista: string,
){
    super(data, ingresso);
    this.horario = horario
    this.artista = artista
    this.data = data
    this.ingresso = ingresso

}
showsabado(): void {
    console.log (`As informações sobre o show de sábado é: 
    Data: ${this.data}
    Artista do dia: ${this.artista}
    Horário: ${this.horario}`)
}
ingressosexta(): void {
    console.log (`O preço do ingresso de sábado é: ${this.ingresso} reais`)
}
}