import { ModalCriarEtapaComponent } from './../../components/gerenciamento-etapa-components/modal-criar-etapa/modal-criar-etapa.component';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MenuLateralEtapaComponent } from "../../components/gerenciamento-etapa-components/menu-lateral-etapa/menu-lateral-etapa.component";
import { BreadcrumbEtapaComponent } from "../../components/gerenciamento-etapa-components/breadcrumb-etapa/breadcrumb-etapa.component";
import { BarraPesquisaEtapaComponent } from "../../components/gerenciamento-etapa-components/barra-pesquisa-etapa/barra-pesquisa-etapa.component";
import { GerenciamentoEtapaComponentsComponent } from "../../components/gerenciamento-etapa-components/gerenciamento-etapa-components.component";
import { ModalEditarEtapaComponent } from "../../components/gerenciamento-etapa-components/modal-editar-etapa/modal-editar-etapa.component";
import { BuscarEtapaComponent } from '../../components/gerenciamento-etapa-components/buscar-etapa/buscar-etapa.component'
import { TrackPageEtapaComponent } from '../../components/gerenciamento-etapa-components/track-page-etapa/track-page-etapa.component'

@Component({
    selector: 'app-gerenciamento-etapas',
    standalone: true,
    templateUrl: './gerenciamento-etapas.component.html',
    styleUrl: './gerenciamento-etapas.component.css',
    imports: [NavbarComponent, MenuLateralEtapaComponent, BreadcrumbEtapaComponent, BarraPesquisaEtapaComponent, ModalCriarEtapaComponent, GerenciamentoEtapaComponentsComponent, ModalEditarEtapaComponent, BuscarEtapaComponent, TrackPageEtapaComponent]
})
export class GerenciamentoEtapasComponent {

}
