import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from 'src/app/Interfaces/clients';
import { ApiPaths, environment } from "src/app/enviroments/enviroments";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  apiUrl : string = environment.baseUrl
  constructor( private http : HttpClient) {}

  // CLIENTS SERVICES METHODS
  GetAllClients(){

  }
  getClientById(id : number) : Observable<Clients>{
    
    return this.http.get<Clients>(this.apiUrl+ApiPaths.ApiVersion+'/Client/'+id)
  }

  //END CLIENTS SERVICES METHODS
}
