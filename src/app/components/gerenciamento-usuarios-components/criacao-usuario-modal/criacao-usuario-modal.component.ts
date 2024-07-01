import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

//BOTAO
@Component({
  selector: 'app-criacao-usuario-modal-button',
  standalone: true,
  imports: [MatButtonModule, MatIcon],
  templateUrl: './criacao-usuario-modal-button.component.html',
})
export class CriacaoUsuarioModalButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CriacaoUsuarioModalComponent);
  }
}

//MODAL
@Component({
  selector: 'app-criacao-usuario-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatIcon, FormsModule, ReactiveFormsModule],
  templateUrl: './criacao-usuario-modal.component.html',
})
export class CriacaoUsuarioModalComponent implements OnInit {

  ngOnInit():void{}
}
