import { Component, OnInit } from '@angular/core';
import { Relatorio } from '../../../interface/relatorio';
import { RelatorioService } from '../../../service/relatorio.service';
import { Arquivo } from '../../../interface/arquivo';
import { ArquivoService } from '../../../service/arquivo.service';
import { CommonModule } from '@angular/common';
import { Disciplina } from '../../../interface/disciplina';
import { ProjetoService } from '../../../service/projeto.service';
import { Projeto } from '../../../interface/projeto';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tabela',
  standalone: true,
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
  imports: [CommonModule]

})
export class TabelaComponent implements OnInit {
   listaArquivos: Arquivo[] = []
   constructor(private arquivoService: ArquivoService ,private projetoService: ProjetoService) { }

   ngOnInit() {
    this.arquivoService.getArquivosPais().subscribe((data) => {
      this.listaArquivos = data
      // this.carregarProjetoDescricao(this.listaArquivos);
    })
  }
  // carregarProjetoDescricao(arquivos: Arquivo[]): void {
  //   arquivos.forEach((arquivo: Arquivo) => {
  //     this.projetoService.findOne(arquivo.projeto_id).subscribe(
  //       (projeto: Projeto) => {
  //         if (projeto) {
  //           arquivo.projeto_descricao = projeto.projeto_descricao || ''; // Atribui a descrição do projeto ao arquivo
  //         } else {
  //           arquivo.projeto_descricao = ''; // Se não encontrar projeto, deixa vazio
  //         }
  //       },
  //       (error: any) => {
  //         console.error(`Erro ao carregar descrição do projeto ${arquivo.projeto_id}:`, error);
  //         arquivo.projeto_descricao = ''; // Trata erro, deixando o campo vazio
  //       }
  //     );
  //   });
  // }


  gerarRelatorio(): void {
    // Array para armazenar os dados da tabela
    const dadosTabela: any[] = [];

    // Obtém os cabeçalhos da tabela
    const headers: string[] = ['Nome', 'Data', 'Projeto', 'Etapa', 'Autor'];

    // Itera pelos arquivos e adiciona os dados à tabela
    this.listaArquivos.forEach(arquivo => {
      const rowData: any[] = [
        arquivo.arquivo_descricao,
        this.stringToDate(arquivo.arquivo_data).toLocaleDateString(),
        // arquivo.projeto_descricao || '',
        // arquivo.etapa_descricao || '',
        arquivo.autor
      ];
      dadosTabela.push(rowData);
    });

    // Cria um workbook do Excel
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([headers].concat(dadosTabela));

    // Adiciona a planilha ao workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Relatório');

    // Converte o workbook para um blob binário
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });

    // Cria um URL temporário e baixa o arquivo Excel
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'relatorio.xlsx';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }

  stringToDate(stringDate: string | Date): Date {
    return new Date(stringDate);
  }
}
