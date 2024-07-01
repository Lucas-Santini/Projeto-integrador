import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ArquivoMenuDropdownComponent } from '../../arquivo-menu-dropdown/arquivo-menu-dropdown.component';
import { Arquivo } from '../../../../interface/arquivo';
import { ArquivoService } from '../../../../service/arquivo.service';
import { log } from 'console';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../../../service/usuario.service';
import { Usuario } from '../../../../interface/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-versoes-arquivo',
  standalone: true,
  imports: [ArquivoMenuDropdownComponent, CommonModule],
  templateUrl: './versoes-arquivo.component.html',
  styleUrl: './versoes-arquivo.component.css'
})
export class VersoesArquivoComponent implements OnChanges, OnDestroy {

  arquivoSelecionado: Arquivo | null = null;
  arquivoSubscription: Subscription;
  autorSubscription: Subscription;
  versoes!: Arquivo[]
  autor: Usuario | null = null;

  constructor(private arquivoService: ArquivoService, private usuarioService: UsuarioService) {
    this.arquivoSubscription = this.arquivoService.arquivoSelecionado$.subscribe(
      arquivo => {
        this.arquivoSelecionado = arquivo;
        if (arquivo) {
          this.buscarVersoes(arquivo.arquivo_id); // Chame a função para buscar o autor quando um novo arquivo for selecionado
        }
      }
    );
    this.autorSubscription = this.usuarioService.autor$.subscribe(
      usuario => {
        this.autor = usuario
      }
    )
  }

  ngOnChanges(): void {
    // this.arquivoService.getVersoesPorId(this.arquivoSelecionado!.arquivo_id).subscribe((data) => {
    //   this.versoes = data
    //   console.log()    })
  }

  ngOnDestroy(): void {
    this.versoes = []
    this.arquivoSubscription.unsubscribe()
  }

  buscarVersoes(arquivoId: string) {
    this.arquivoService.getVersoesPorId(arquivoId).subscribe(
      (data) => {
        console.log("id do arquivo",arquivoId)
        this.versoes = data;
        console.log("versoes:",data); // Certifique-se de que o autor foi buscado com sucesso
      }
    );
  }

  stringToDate(dateString: string | Date): Date {
    return new Date(dateString);
  }

  getExtensao(descricao: string): string {
    let partes = descricao.split('.');
    return partes[partes.length - 1];
  }

}
