import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Relatorio } from '../interface/relatorio';
import { environment } from '../../environments/environment';
import { Arquivo } from '../interface/arquivo';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private apiUrl = 'http://academico3.rj.senac.br/arquivo';

  constructor(private http: HttpClient) {}

  getArquivos(): Observable<Arquivo[]> {
    return this.http.get<Arquivo[]>(this.apiUrl);
  }




}
