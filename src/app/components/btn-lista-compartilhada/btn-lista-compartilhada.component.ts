import { Component, TemplateRef, ViewChild} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogContent} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ListaCompartilhadaModalButtonComponent } from '../lista-compartilhada/lista-compartilhada-modal/lista-compartilhada-modal.component'
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-btn-lista-compartilhada',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatDialogModule, ListaCompartilhadaModalButtonComponent, MatDialogContent, MatIcon],
  templateUrl: './btn-lista-compartilhada.component.html',
  styleUrl: './btn-lista-compartilhada.component.css'
})
export class BtnListaCompartilhadaComponent {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  constructor(
    private dialog: MatDialog,
  ){}

  openModal(){
    this.dialog.open(this.modalTemplate);
  }
}
