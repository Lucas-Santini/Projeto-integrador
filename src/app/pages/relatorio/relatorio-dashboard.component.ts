import { BuscaComponent } from './../../components/busca/busca.component';
import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from './../../components/relatorio/dropdown/dropdown.component';
import { CardsComponent } from '../../components/relatorio/cards/cards.component';
import { BreadcrumbComponent } from '../../components/relatorio/breadcrumb/breadcrumb.component';
import { IndicadorComponent } from '../../components/relatorio/indicador/indicador.component';
import { BadgeAtivoComponent } from '../../components/relatorio/badge-ativo/badge-ativo.component';
import { CalendarComponent } from '../../components/relatorio/calendar/calendar.component';
import { UserInfoComponent } from '../../components/relatorio/user-info/user-info.component';
import { ArquivosRecentesComponent } from '../../components/relatorio/arquivos-recentes/arquivos-recentes.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { first } from 'rxjs';
import { Arquivo } from '../../interface/arquivo';
import { ArquivoService } from '../../service/arquivo.service';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  templateUrl: './relatorio-dashboard.component.html',
  styleUrl: './relatorio-dashboard.component.css',
  imports: [
    CardsComponent,
    BreadcrumbComponent,
    IndicadorComponent,
    DropdownComponent,
    BadgeAtivoComponent,
    CalendarComponent,
    UserInfoComponent,
    ArquivosRecentesComponent,
    NavbarComponent,
    MenuLateralComponent,
    BuscaComponent,
  ],
})
export class RelatorioComponent implements OnInit {
  listaArquivos: Arquivo[] = [];
  listaArquivosAprovados: Arquivo[] = [];
  listaArquivosReprovados: Arquivo[] = [];
  listaArquivosPendentes: Arquivo[] = [];

  constructor(private arquivoService: ArquivoService) {}

  ngOnInit(): void {
    this.arquivoService
      .findAll()
      .pipe(first())
      .subscribe((data) => {
        this.listaArquivos = data;
        console.log(data);

        this.listaArquivos.forEach((arquivo) => {
          switch (arquivo.arquivo_status) {
            case 1:
              this.listaArquivosAprovados.push(arquivo);
              break;
            case -1:
              this.listaArquivosReprovados.push(arquivo);
              break;
            case 0:
              this.listaArquivosPendentes.push(arquivo);
              break;
          }
        });
      });
  }
}
