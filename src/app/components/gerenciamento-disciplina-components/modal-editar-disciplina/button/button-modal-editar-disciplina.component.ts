
import { Component } from "@angular/core";
import { MatDialog, MatDialogContent } from '@angular/material/dialog';
import { ModalEditarDisciplinaComponent } from "../modal-editar-disciplina.component";


@Component({
    selector: 'app-button-modal-editar-disciplina',
    templateUrl: 'button-modal-editar-disciplina.component.html',
    standalone: true,
    imports: [MatDialogContent],
  })
  export class ButtonModalEditarDisciplina {
    constructor(public dialog: MatDialog) {}

    openDialog() {
      this.dialog.open(ModalEditarDisciplinaComponent);
    }
  
  }