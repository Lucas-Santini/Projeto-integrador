import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../../service/disciplina.service';
import { Router } from '@angular/router';
import { Disciplina } from '../../../interface/disciplina';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalButtonComponent } from "../../gerenciamento-arquivos-components/modal-enviar-arquivo/modal-enviar-arquivo.component";

@Component({
    selector: 'app-menu-lateral-disciplina',
    standalone: true,
    templateUrl: './menu-lateral-disciplina.component.html',
    styleUrl: './menu-lateral-disciplina.component.css',
    imports: [CommonModule, RouterModule, ModalButtonComponent]
})
export class MenuLateralDisciplinaComponent implements OnInit{
  constructor(private disciplinaService: DisciplinaService, private router: Router) { }

  disciplina: Disciplina[] = [];
  isDropdownOpen: boolean[] = [];

  ngOnInit(): void {
    const id = sessionStorage.getItem('id')
  }

  getDisciplinas(): void {
    this.disciplinaService.findAll().subscribe(disciplinas => {
      this.disciplina = disciplinas;
    });
  }

  toggleDropdown(disciplina: any) {
    disciplina.dropdownOpen = !disciplina.dropdownOpen;
}

  listaCompartilhada() {
    this.router.navigate(['/listaCompartilhada'])
  }
}