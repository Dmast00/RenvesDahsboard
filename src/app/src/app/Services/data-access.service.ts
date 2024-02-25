import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from 'src/app/Interfaces/clientInterfaces/clients';
import { ApiPaths, environment } from "src/app/enviroments/enviroments";
import { map } from 'rxjs/operators';
import { ClientData } from 'src/app/Interfaces/clientInterfaces/clientdata';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  apiUrl : string = environment.baseUrl
  constructor( private http : HttpClient) {}

  // CLIENTS SERVICES METHODS
  GetAllClients() : Observable<ClientData>{
    return this.http.get<ClientData>(this.apiUrl+ApiPaths.ApiVersion+'/Client?PageNumber=1&Pagesize=10')
  }
  getClientById(id : number) : Observable<Clients>{
    
    return this.http.get<Clients>(this.apiUrl+ApiPaths.ApiVersion+'/Client/'+id)
  }
  PostClient(form : any){
    return this.http.post(this.apiUrl+ApiPaths.ApiVersion+'/Client',form)
  }

  //END CLIENTS SERVICES METHODS
}
