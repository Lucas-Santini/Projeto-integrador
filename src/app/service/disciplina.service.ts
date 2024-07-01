import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Observable, catchError, throwError } from "rxjs";
import { Disciplina } from "../interface/disciplina";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'aplication/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiServer + 'disciplina';
  }

  getDisciplina(): Observable<any> {
    return this.http.get<Disciplina[]>(this.baseUrl).pipe(
      catchError(this.handleError) // Handle potential errors
    );
  }

  post(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.post<Disciplina>(this.baseUrl, disciplina).pipe(
      catchError(this.handleError)
    );
  }

  findAll(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    )
  }

  findOne(id: number): Observable<Disciplina> {
    return this.http.get<Disciplina>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError) // Handle potential errors
    );
  }

  patch(id: number, changes: Partial<Disciplina>): Observable<Disciplina> {
    return this.http.patch<Disciplina>(`${this.baseUrl}/${id}`, changes, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError) // Handle potential errors
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

  findDisciplinasDeProjetoIdDaEmpresaDoUsuarioId(idUsuario: number, idProjeto: number): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(`${this.baseUrl}/disciplinasDeProjetoIdDaEmpresaDoUsuarioId/${idUsuario}/${idProjeto}`).pipe(
      catchError(this.handleError)
    );
  }
  findDisciplinasDeProjetoId(idProjeto: number): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(`${this.baseUrl}/projeto/${idProjeto}`).pipe(
      catchError(this.handleError)
    );
  }
  // findDisciplinasDeProjetoIdDaEmpresa(idUsuario: number, idProjeto: number): Observable<Disciplina[]> {
  //   return this.http.get<Disciplina[]>(`${this.baseUrl}/disciplinasDeProjetoIdDaEmpresaDoUsuarioId/${idUsuario}/${idProjeto}`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

}

