import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Etapa } from '../../interface/etapa';
import { EtapaService } from '../../service/etapa.service';
import { NgFor } from '@angular/common';
import { ButtonModalEditarEtapa } from "./modal-editar-etapa/button/button-modal-editar-etapa.component";

@Component({
    selector: 'app-gerenciamento-etapa-components',
    standalone: true,
    templateUrl: './gerenciamento-etapa-components.component.html',
    styleUrl: './gerenciamento-etapa-components.component.css',
    imports: [NgFor, RouterModule, ButtonModalEditarEtapa]
})
export class GerenciamentoEtapaComponentsComponent implements OnInit {
  etapa: Etapa[] = [];

  constructor(private etapaService: EtapaService) { }

  ngOnInit(): void {
    this.CarregarEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(4, 5);
  }

  CarregarEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(idUsuario: number, idDisciplina: number) {
    this.etapaService.findEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(idUsuario, idDisciplina).subscribe({
      next: (etapa) => {
        this.etapa = etapa;
      },
      error: (error) => console.log(error)
    });
  }

  deletarEtapa(idEtapa: number): void {
    this.etapaService.remove(idEtapa).subscribe(() => {
      this.etapa = this.etapa.filter(
        (e) => e.etapa_id !== idEtapa
      );
    });
  }

}
