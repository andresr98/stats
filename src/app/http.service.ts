import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAlumno } from './Alumno';
import { barras } from './Alumno';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {


  constructor(private http: HttpClient) { }

  private _url: string = "http://luditics.eastus.cloudapp.azure.com/alumnos/";
  private _url2:string = "http://luditicsudea.eastus.cloudapp.azure.com/";

  getAlumnos():Observable<IAlumno[]>{
  	return this.http.get<IAlumno[]>(this._url2+'alumnos/');
  }

  getBarras(parameters):Observable<barras[]>{
    return this.http.post<barras[]>('http://luditics.eastus.cloudapp.azure.com/barras/', parameters);
  }

  getSabiasQue(){
  	return this.http.get(this._url2 + 'sabiasQue/')
  }

  getHistorias(){
    return this.http.get(this._url2 + 'historias/')
  }

  getGrupos(){
    return this.http.get(this._url2 + 'grupos/')
  }

  agregarSabiasQue(data){
    return this.http.post(this._url2 + 'sabiasQue/', data)
  }

  actualizarSabiasQue(data){
    return this.http.put(this._url2 + 'sabiasQue/', data)
  }

  borrarSabiasQue(elem){
    return this.http.delete(this._url2 + 'sabiasQue/'+elem.id+'/')
  }

  agregarHistoria(data){
    return this.http.post(this._url2 + 'historias/',data)
  }

  actualizarHistoria(data){
    return this.http.put(this._url2 + 'historias/', data)
  }

  borrarHistoria(elem){
    return this.http.delete(this._url2 + 'historias/'+elem.id+'/')
  }

  agregarAlumno(data){
    return this.http.post(this._url2 + 'alumnos/',data)
  }

  actualizarAlumno(data){
    return this.http.put(this._url2 + 'alumnos/', data)
  }

  borrarAlumno(elem){
    return this.http.delete(this._url2 + 'alumnos/'+elem.id+'/')
  }

  agregarGrupo(data){
    return this.http.post(this._url2 + 'grupos/',data)
  }

  actualizarGrupo(data){
    return this.http.put(this._url2 + 'grupos/', data)
  }

  borrarGrupo(elem){
    return this.http.delete(this._url2 + 'grupos/'+elem.id+'/')
  }

}