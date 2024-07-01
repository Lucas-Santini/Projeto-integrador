import { listaCompartilhadaDto } from './../../../interface/listaCompartilhadaDto';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogRef
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { ListaCompartilhadaService } from '../../../service/listaCompartilhada.service';

// botao
@Component({
  selector: 'app-lista-compartilhada-modal-button',
  standalone: true,
  imports: [MatButtonModule, MatIcon],
  templateUrl: './lista-compartilhada-modal-button.component.html',
})
export class ListaCompartilhadaModalButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(){
    this.dialog.open(ListaCompartilhadaModalComponent);
  }
}

// Modal
@Component({
  selector: 'app-lista-compartilhada-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatIcon, FormsModule, ReactiveFormsModule],
  templateUrl: './lista-compartilhada-modal.component.html'
})

export class ListaCompartilhadaModalComponent implements OnInit {
  listaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ListaCompartilhadaModalComponent>,
    private listaCompartilhadaService: ListaCompartilhadaService,
    private formBuilder: FormBuilder
  ) {
    this.listaForm = this.formBuilder.group({
      lista_compartilhada_descricao: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.listaForm.valid) {
      const listaCompartilhadaData = new listaCompartilhadaDto()
      listaCompartilhadaData.lista_compartilhada_status = 1
      listaCompartilhadaData.lista_compartilhada_data = new Date(Date.now())
      listaCompartilhadaData.lista_compartilhada_descricao = this.listaForm.get("lista_compartilhada_descricao")?.value
      console.log('Dados do formulário:', listaCompartilhadaData);
      this.listaCompartilhadaService.postListaCompartilhada(listaCompartilhadaData).subscribe(
        (response) => {
          console.log('Dados enviados com sucesso:', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Erro ao enviar dados:', error);
        }
      );
    } else {
      console.log('Formulário inválido. Por favor, corrija os campos.');
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
