import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EtapaService } from '../../../service/etapa.service';
import { Etapa } from '../../../interface/etapa';

@Component({
  selector: 'app-modal-criar-etapa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-criar-etapa.component.html',
  styleUrl: './modal-criar-etapa.component.css'
})
export class ModalCriarEtapaComponent {

  etapaForm = new FormGroup({
    etapa_descricao: new FormControl('', Validators.required),
    /**etapa_data_inicio: new FormControl('', Validators.required), */
    etapa_status: new FormControl(1, Validators.required),
    disciplina_id: new FormControl(4, Validators.required),
    /**etapa_id_pai: new FormControl(4, Validators.required), */
  });

  constructor(private etapaService: EtapaService) { }

  onSubmit() {
    console.log(this.etapaForm.value);
    this.etapaService.post(<Etapa>this.etapaForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    })
  }

}
