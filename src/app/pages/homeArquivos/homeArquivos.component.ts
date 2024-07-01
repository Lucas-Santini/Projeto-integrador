import { Component, Input, OnInit } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { BarraPesquisaProjetoComponent } from '../../components/home-arquivos-components/barra-pesquisa-projeto/barra-pesquisa-projeto.component';
import { HomeArquivosComponentsComponent } from '../../components/home-arquivos-components/home-arquivos-components.component';
import { ButtonModalCriarProjeto } from '../../components/home-arquivos-components/modal-criar-projeto/button/button-modal-criar-projeto.component';
import { ModalCriarProjetoComponent } from '../../components/home-arquivos-components/modal-criar-projeto/modal-criar-projeto.component';
import { RouterLink, RouterModule } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { EmpresaService } from '../../service/empresa.service';
import { Empresa } from '../../interface/empresa';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './homeArquivos.component.html',
  styleUrls: ['./homeArquivos.component.css'],
  imports: [
    ComentarioComponent,
    TabsComponent,
    NavbarComponent,
    MenuLateralComponent,
    BarraPesquisaProjetoComponent,
    HomeArquivosComponentsComponent,
    ButtonModalCriarProjeto,
    ModalCriarProjetoComponent,
    RouterModule,
    BreadcrumbComponent,
    BreadcrumbItemDirective,
  ],
})
export class HomeComponent implements OnInit {

  email: string | null = null;
  idUsuario!: number;
  empresa!: Empresa;

  constructor(
    private empresaService: EmpresaService,
    private usuarioService: UsuarioService,
    private router: RouterModule
  ) {}

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email');

    if (this.email) {
      this.usuarioService.getUsuarioPorEmail(this.email).subscribe(
        (usuario) => {
          this.idUsuario = usuario?.usuario_id;
          sessionStorage.setItem("id", this.idUsuario.toString());
          this.fetchEmpresa();
        },
        (error) => {
          console.error('Erro ao buscar usuário pelo email', error);
        }
      );
    }
  }

  fetchEmpresa(): void {
    if (this.idUsuario) {
      this.empresaService.getEmpresaByUsuarioId(this.idUsuario).subscribe(
        (data: Empresa[]) => {
          this.empresa = data[0];
        },
        (error) => {
          console.error('Error fetching empresa data', error);
        }
      );
    }
  }
}
