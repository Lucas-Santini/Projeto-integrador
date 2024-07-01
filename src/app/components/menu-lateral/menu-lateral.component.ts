import { Empresa } from './../../interface/empresa';
import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { ProjetoService } from '../../service/projeto.service';
import { RouterModule } from '@angular/router';
import {
  ModalButtonComponent,
  ModalEnviarArquivoComponent,
} from '../gerenciamento-arquivos-components/modal-enviar-arquivo/modal-enviar-arquivo.component';
import { EmpresaService } from '../../service/empresa.service';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';
import { Subscription } from 'rxjs';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DisciplinaService } from '../../service/disciplina.service';
import { EtapaService } from '../../service/etapa.service';
import { Projeto } from '../../interface/projeto';
@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgIf,
    RouterModule,
    ModalButtonComponent,
    ReactiveFormsModule,
    ModalEnviarArquivoComponent,
  ],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css',
})
export class MenuLateralComponent implements OnInit {
  usuarioAutenticado: Usuario | null = null;
  private usuarioAutenticadoSubscription!: Subscription;

  constructor(
    private projetoService: ProjetoService,
    private disciplinaService: DisciplinaService,
    private empresaService: EmpresaService,
    private etapaService: EtapaService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}
  initialCityName = 'Buscar Empresas';
  placeholderText: string = 'Buscar Empresas';
  projetos: Projeto[] = [];
  empresas: Empresa[] = [];
  formBusca = new FormGroup({
    empresa_nome: new FormControl(''),
  });



  ativebotaoetapas:Set<number> = new Set<number>()
  activeButtonIds: Set<number> = new Set<number>();
  idEmpresaSelecionada!: number;


  empresaId!: number;
  isEmpresaSelected: boolean = false;
  button2Class = 'default-class';
  ngOnInit(): void {
    // let usuarioId = 4; //get usuario de session ID
    // this.getEmpresas(usuarioId);
  }


  buscaEmpresaPorNome() {
    console.log(this.formBusca.value.empresa_nome);

    this.getEmpresaPorNome(<string>this.formBusca.value.empresa_nome);

  }


  //--------------------------------------------
  //----Buscando Empresa por nome no endpoint---
  //--------------------------------------------
  getEmpresaPorNome(nomeEmpresa: string): void {
    this.empresaService.getEmpresaByNome(nomeEmpresa).subscribe({
      next: (response) => {
        this.empresas = response;
        this.isEmpresaSelected = true;
        this.empresas = Array.isArray(response) ? response : [response];
        this.empresas.forEach((empresa) => {
          this.projetoService
            .findProjetosDaEmpresaId(<number>empresa.empresa_id)
            .subscribe({
              next: (response1) => {
                this.placeholderText = empresa.empresa_nome;
                this.projetos = response1;
                empresa.projetos = response1;
                empresa.projetos.forEach((projeto) => {
                  this.disciplinaService
                    .findDisciplinasDeProjetoId(<number>projeto.projeto_id)
                    .subscribe({
                      next: (response2) => {
                        projeto.disciplinas = response2;
                        projeto.disciplinas.forEach((disciplina) => {
                          this.etapaService
                            .findEtapasDaDisciplinaId(
                              <number>disciplina.disciplina_id
                            )
                            .subscribe({
                              next: (response3) => {
                                disciplina.etapas = response3;
                              },
                            });
                        });
                      },
                    });
                });
              },
            });
        });
        console.log(this.empresas);
      },
      error: (error) => console.log(error),
    });
  }

  OnSubmit(): void {
    this.getEmpresaPorNome(this.initialCityName);
    this.initialCityName = '';
  }


  //--------------------------------------------
  //----DropDown---
  //--------------------------------------------
  onButtonClickDisciplinas(id: number) {
    if (this.activeButtonIds.has(id)) {
      this.activeButtonIds.delete(id);
    } else {
      this.activeButtonIds.add(id);
    }
  }
  isButtonActiveDisciplinas(id: number): boolean {
    return this.activeButtonIds.has(id);
  }
  onButtonClickEtapas(id: number) {
    if (this.ativebotaoetapas.has(id)) {
      this.ativebotaoetapas.delete(id);
    } else {
      this.ativebotaoetapas.add(id);
    }
  }
  isButtonActiveEtapas(id: number): boolean {
    this.isEmpresaSelected = true;
    return this.ativebotaoetapas.has(id);
  }
  //--------------------------------------------
  //----DropDown---
  //--------------------------------------------

  // selecionarEmpresa(idEmpresa: number){
  //   this.listaProjetos = [];
  //   this.idEmpresaSelecionada = idEmpresa;
  //   this.getProjetosDeEmpresaId(idEmpresa);
  //   this.getOneEmpresa(idEmpresa);
  //   this.isEmpresaSelected = true;
  // }
  // getEmpresas(idUsuario: number):void{
  //   this.listaEmpresas =[];
  //   this.empresaService.getEmpresaByUsuarioId(idUsuario).subscribe({
  //     next:(response) =>{
  //       response && (this.listaEmpresas = response);
  //     },
  //       error: (error) => console.log(error),
  //   })
  //   //se o usuario não for superAdmin só terá uma única empresa vinculada
  //   if (this.listaEmpresas.length == 1){
  //     this.getProjetosUsuarioId(idUsuario);
  //     this.projetoService.setEmpresaSelecionada(this.listaEmpresas[0]);
  //   }
  // }
  // getProjetosUsuarioId(idUsuario: number) : void {
  //   this.listaProjetos = [];
  //   this.projetoService.findProjetosDaEmpresaDoUsuarioId(idUsuario).subscribe({
  //     next:(response) =>{
  //       response && (this.listaProjetos = response);
  //     },
  //       error: (error) => console.log(error),
  //   })
  // }

  // getProjetosDeEmpresaId(idEmpresa: number) : void {
  //   if(idEmpresa != -999){
  //     this.projetoService.findProjetosDaEmpresaId(idEmpresa).subscribe({
  //       next:(response) =>{
  //         response && (this.listaProjetos = response);
  //       },
  //         error: (error) => console.log(error),
  //     })
  //   }
  // }

  // getOneEmpresa(idEmpresa: number): void {
  //   if(idEmpresa != -999){
  //     this.empresaService.getEmpresaById(idEmpresa).subscribe({
  //       next:(response) =>{
  //         this.projetoService.setEmpresaSelecionada(response);
  //       },
  //       error: (error) => console.log(error),
  //     })
  //   }
  // }

  listaCompartilhada() {
    this.router.navigate(['/listaCompartilhada']);
  }
  usuarios() {
    this.router.navigate(['/usuarios']);
  }
  dashboard() {
    this.router.navigate(['/dashboard'])
  }
  empresasrota() {
    this.router.navigate(['/']);
  }
}