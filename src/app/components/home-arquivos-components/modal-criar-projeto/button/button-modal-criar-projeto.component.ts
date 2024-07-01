import { MatDialog } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { ModalCriarProjetoComponent } from "../modal-criar-projeto.component";

@Component({
    selector: 'app-button-modal-criar-projeto',
    templateUrl: 'button-modal-criar-projeto.component.html',
    standalone: true,
    imports: [],
  })
  export class ButtonModalCriarProjeto {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(ModalCriarProjetoComponent);
    }
  }