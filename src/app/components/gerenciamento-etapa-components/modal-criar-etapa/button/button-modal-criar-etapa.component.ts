import { MatDialog } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { ModalCriarEtapaComponent } from "../modal-criar-etapa.component";

@Component({
    selector: 'app-button-modal-criar-etapa',
    templateUrl: 'button-modal-criar-etapa.component.html',
    standalone: true,
    imports: [],
  })
  export class ButtonModalCriarEtapa {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(ModalCriarEtapaComponent);
    }
  }