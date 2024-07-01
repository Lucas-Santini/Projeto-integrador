import { Usuario } from './../interface/usuario';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from '../../environments/environment.development';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly baseUrl: string;

  private usuarioAutenticadoSubject = new BehaviorSubject<Usuario | null>(null);
  usuarioAutenticado$ = this.usuarioAutenticadoSubject.asObservable();

  private autorSelecionadoSubject = new BehaviorSubject<Usuario | null>(null);
  autor$ = this.autorSelecionadoSubject.asObservable();
  private revisorSelecionadoSubject = new BehaviorSubject<Usuario | null>(null);
  revisor$ = this.revisorSelecionadoSubject.asObservable();

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiServer + 'usuario';
  }

  findAll() : Observable<Usuario[]>  {
    return this.http.get<Usuario[]>(this.baseUrl, httpOptions)
  }

  findByid(id: number | undefined): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`, httpOptions)
  }

  setAutor(usuario: Usuario | null) {
    this.autorSelecionadoSubject.next(usuario);
  }

  setRevisor(usuario: Usuario | null) {
    this.revisorSelecionadoSubject.next(usuario);
  }

  getUsuariosPorEmpresaId(idEmpresa: number){
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarioByEmpresaId/${idEmpresa}`, httpOptions)
  }

  getUsuarioPorEmail(email: string | null){
    return this.http.get<Usuario>(`${this.baseUrl}/usuarioByEmail/${email}`, httpOptions)
  }

  /* ======================== Service para comunicação de componentes=========== */

  setUsuarioAutenticado(usuario: Usuario | null) {
    this.usuarioAutenticadoSubject.next(usuario);
  }

}
