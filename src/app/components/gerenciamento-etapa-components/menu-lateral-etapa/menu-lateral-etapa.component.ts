import { Component, OnInit } from '@angular/core';
import { EtapaService } from '../../../service/etapa.service';
import { Router } from '@angular/router';
import { Etapa } from '../../../interface/etapa';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalButtonComponent } from "../../gerenciamento-arquivos-components/modal-enviar-arquivo/modal-enviar-arquivo.component";

@Component({
    selector: 'app-menu-lateral-etapa',
    standalone: true,
    templateUrl: './menu-lateral-etapa.component.html',
    styleUrl: './menu-lateral-etapa.component.css',
    imports: [CommonModule, RouterModule, ModalButtonComponent]
})
export class MenuLateralEtapaComponent implements OnInit {
  constructor(private etapaService: EtapaService, private router: Router) { }

  etapa: Etapa[] = [];
  isDropdownOpen: boolean[] = [];

  ngOnInit(): void {
    this.getEtapas();
  }

  getEtapas(): void {
    this.etapaService.findAll().subscribe(etapas => {
      this.etapa = etapas;
    });
  }

  toggleDropdown(etapa: any) {
    etapa.dropdownOpen = !etapa.dropdownOpen;
  }

  listaCompartilhada() {
    this.router.navigate(['/listaCompartilhada'])
  }
}
