import { MatDialog } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { ModalEditarProjetoComponent } from "../modal-editar-projeto.component";

@Component({
    selector: 'app-button-modal-editar-projeto',
    templateUrl: 'button-modal-editar-projeto.component.html',
    standalone: true,
    imports: [],
  })
  export class ButtonModalEditarProjeto {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(ModalEditarProjetoComponent);
    }
  }