import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from '../models/Livre';
import * as flatten from 'flat';

@Injectable({
  providedIn: 'root'
})
export class LivreService{
  getResources(arg0: string) {
    throw new Error('Method not implemented.');
  }
    
  private livreCopy!:Livre;
  private baseUrl!:string;
  private addLivreUrl!: string;
  private getLivreUrl!:string;
  private updateLivreUrl!:string;
  private deleteLivreUrl!:string;
  private requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) 
  {    
    this.baseUrl="http://localhost:8080/api/livre";
    this.addLivreUrl="http://localhost:8080/api/livre/add";
    this.getLivreUrl="http://localhost:8080/api/livre/all";
    this.updateLivreUrl="http://localhost:8080/api/livre/update/";
    this.deleteLivreUrl="http://localhost:8080/api/livre/delete/";

  }
  public setData(livre :Livre)
  {
    this.livreCopy=livre;

  }
  public getData():Livre
  {
    return this.livreCopy;
  }
  public getLivres(): Observable<Livre[]>{
    return this.http.get<Livre[]>(`${this.getLivreUrl}`, {
      headers: this.requestHeader,
    });
  }

  public addLivre(livre: FormData): Observable<Livre> {
    return this.http.post<Livre>(`${this.addLivreUrl}`,livre);
  }

  public updateLivre(id :Number,livre: FormData): Observable<Livre>{
    return this.http.put<Livre>(`${this.updateLivreUrl}`+id, livre);
  }
  public getLivreById(id:Number): Observable<Livre>{
    return this.http.get<Livre>(`${this.baseUrl}/id`);
  }
  public getLivreByTitle(titre:string): Observable<Livre[]>{
    return this.http.get<Livre[]>(`${this.baseUrl}/title/`+titre);
  }
  public deleteLivre(id:Number):Observable<any>{
    return this.http.delete<Livre>(`${this.deleteLivreUrl}`+id)};
    
}

