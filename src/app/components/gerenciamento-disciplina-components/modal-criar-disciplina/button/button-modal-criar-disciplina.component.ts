import { MatDialog } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { ModalCriarDisciplinaComponent } from "../modal-criar-disciplina.component";

@Component({
    selector: 'app-button-modal-criar-disciplina',
    templateUrl: 'button-modal-criar-disciplina.component.html',
    standalone: true,
    imports: [],
  })
  export class ButtonModalCriarDisciplina {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(ModalCriarDisciplinaComponent);
    }
  }