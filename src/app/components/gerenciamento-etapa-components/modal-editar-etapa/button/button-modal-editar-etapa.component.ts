import { MatDialog } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { ModalEditarEtapaComponent } from "../modal-editar-etapa.component";

@Component({
    selector: 'app-button-modal-editar-etapa',
    templateUrl: 'button-modal-editar-etapa.component.html',
    standalone: true,
    imports: [],
  })
  export class ButtonModalEditarEtapa {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(ModalEditarEtapaComponent);
    }
  }