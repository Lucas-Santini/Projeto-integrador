import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../interface/disciplina';
import { DisciplinaService } from '../../service/disciplina.service';
import { ProjetoService } from '../../service/projeto.service';
import { Projeto } from '../../interface/projeto';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalCriarDisciplinaComponent } from "./modal-criar-disciplina/modal-criar-disciplina.component";
import { ButtonModalEditarDisciplina } from "./modal-editar-disciplina/button/button-modal-editar-disciplina.component";
import { EmpresaService } from '../../service/empresa.service';
import { ArquivoUsuario } from '../../interface/arquivo-usuario';


@Component({
    selector: 'app-gerenciamento-disciplina-components',
    standalone: true,
    templateUrl: './gerenciamento-disciplina-components.component.html',
    styleUrls: ['./gerenciamento-disciplina-components.component.css'],
    imports: [NgFor, RouterModule, ModalCriarDisciplinaComponent, ButtonModalEditarDisciplina]
})
export class GerenciamentoDisciplinaComponentsComponent implements OnInit {
    disciplina: Disciplina[] = [];
    listaDisciplinas: ArquivoUsuario[] = [];
    
    constructor(
        private disciplinaService: DisciplinaService,
        private projetoService: ProjetoService,
        private empresaService: EmpresaService
    ) { }

    ngOnInit() {
        const idStorage = Number(sessionStorage.getItem('id'));
        
        this.empresaService.getProjetoByUsuarioId(idStorage).subscribe(data => {
          this.listaDisciplinas = data;
        });
      }

    CarregarDisciplinasDeProjetoIdDaEmpresaDoUsuarioId(idProjeto: number, idUsuario: number) {
        this.disciplinaService.findDisciplinasDeProjetoIdDaEmpresaDoUsuarioId(idProjeto, idUsuario).subscribe({
            next: (disciplina) => {
                this.disciplina = disciplina;
                this.carregarProjetoNome(disciplina);
            },
            error: (error) => console.log(error)
        });
    }

    private carregarProjetoNome(disciplina: Disciplina[]): void {
        disciplina.forEach((disc: Disciplina) => {
            this.projetoService.findOne(disc.projeto_id).subscribe(
                (projeto: Projeto) => {
                    if (projeto) {
                        disc.projeto_nome = projeto.projeto_descricao || '';
                    } else {
                        disc.projeto_nome = '';
                    }
                },
                (error: any) => {
                    console.error(`Erro ao carregar nome do projeto ${disc.projeto_id}:`, error);
                    disc.projeto_nome = '';
                }
            );
        });
    }

    deletarDisciplina(idDisciplina: number): void {
        this.disciplinaService.remove(idDisciplina).subscribe(() => {
            this.disciplina = this.disciplina.filter(
                (d) => d.disciplina_id !== idDisciplina
            );
        });
    }
}



