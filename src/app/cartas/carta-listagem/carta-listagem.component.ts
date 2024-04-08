import { Carta } from './../../shared/model/carta';
import { Component, OnInit } from '@angular/core';
import { CartasService } from '../../shared/service/cartas.service';

export interface Carta{
  id:number;
  nome: string;
  forca: number;
  inteligencia:number;
  velocidade:number;
  dataCadastro:Date;
}


@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrl: './carta-listagem.component.scss'
})
export class CartaListagemComponent implements OnInit{

  public cartas: Carta[] = [
    {id: 1, nome: 'Jonatan', forca: 1, inteligencia: 2, velocidade: 1, dataCadastro: new Date()},
    {id: 2, nome: 'Arthur Martins', forca: 4, inteligencia: 5, velocidade: 1, dataCadastro: new Date()},
    {id: 3, nome: 'Vitor', forca: 2, inteligencia: 5, velocidade: 1, dataCadastro: new Date()},

  ]


  constructor(private cartaService: CartasService) { }

  ngOnInit(): void {
    this.consultarTodasCartas();
  }

  private consultarTodasCartas(){
    this.cartaService.listarTodas().subscribe(
      resultado => {
        this.cartas = resultado;
      },
      erro => {
        console.error('Erro ao consultar cartas', erro);
      }
    );
  }
}
