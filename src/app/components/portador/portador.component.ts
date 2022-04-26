import { Component, OnInit } from '@angular/core';
import {Portador} from "../../model/Portador";
import {PortadorService} from "../../services/portador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-portador',
  templateUrl: './portador.component.html',
  styleUrls: ['./portador.component.scss']
})
export class PortadorComponent implements OnInit {
  portador = Array<Portador>();
  displayedColumns: string[]=
    ['nome', 'cpf', 'telefone', 'assistencia_id_assistencia', 'dia_faturamento', "adesao_ativa"];

  constructor(private PortadorService: PortadorService, private roteador: Router) {

  }

  ngOnInit(): void {
    this.PortadorService.listar().subscribe(

      p => this.portador = p

    )
    console.log(this.portador);

  }

  editar(portador: Portador[]):void {


    this.roteador.navigate(['portador/cadastrar', portador])

  }

  remover(portador: Portador[]) {

  }
}
