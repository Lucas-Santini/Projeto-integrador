import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Observable, catchError, throwError } from "rxjs";
import { Etapa } from "../interface/etapa";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'aplication/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class EtapaService {
    private readonly baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiServer + 'etapa';
    }

    post(etapa: Etapa): Observable<Etapa> {
        return this.http.post<Etapa>(this.baseUrl, etapa).pipe(
          catchError(this.handleError)
        );
      }

    findAll(): Observable<Etapa[]> {
        return this.http.get<Etapa[]>(this.baseUrl).pipe(
            catchError(this.handleError)
        )
    }

    findOne(id: number): Observable<Etapa> {
        return this.http.get<Etapa>(`${this.baseUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    patch(id: number, alteracoes: Partial<Etapa>): Observable<Etapa> {
        return this.http.patch<Etapa>(`${this.baseUrl}/${id}`, alteracoes, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    remove(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Observable<never> {
        let errorMessage: string;
        if (error.error instanceof ErrorEvent) {
            errorMessage = 'Ocorreu um erro: ' + error.error.message;
        } else {
            errorMessage = `O backend retornou o código ${error.status}: ${error.message}`
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

    /* ======================= Services Baseados no Usuário ====================== */

    findEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(idUsuario: number, idDisciplina: number): Observable<Etapa[]> {
      return this.http.get<Etapa[]>(`${this.baseUrl}/etapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId/${idUsuario}/${idDisciplina}`).pipe(
          catchError(this.handleError)
      );
    }
    
    findEtapasDaDisciplinaId(idDisciplina: number): Observable<Etapa[]> {
        return this.http.get<Etapa[]>(`${this.baseUrl}/disciplina/${idDisciplina}`).pipe(
            catchError(this.handleError)
        );
      }


}
