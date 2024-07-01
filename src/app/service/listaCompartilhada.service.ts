import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { listaCompartilhada } from "../interface/listaCompartilhada";
import { listaCompartilhadaDto } from "../interface/listaCompartilhadaDto";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class ListaCompartilhadaService {
  private readonly baseUrl: string;

  constructor(private httpCliente: HttpClient) {
    this.baseUrl = environment.apiServer+'lista-compartilhada';
  }

  getListaCompartilhada(): Observable<any> {
    return this.httpCliente.get<any>(`${this.baseUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  postListaCompartilhada(listacompartilhada: listaCompartilhadaDto): Observable<listaCompartilhada> {
    console.log('Dados a serem enviados para o backend:', listacompartilhada);
    return this.httpCliente.post<listaCompartilhada>(this.baseUrl, listacompartilhada, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
}
