import { Component } from '@angular/core';
import { Clients } from 'src/app/Interfaces/clients';
import { DataAccessService } from '../../app/Services/data-access.service';
import { stringToArray } from 'konva/lib/shapes/Text';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent{

  clientsList = []
  client: Clients | null = null; // Initialize client data
  constructor(private http : DataAccessService) { }

  
  ngOnInit(){
    this.getClientById();
  }

  GetAllClients():Clients[]{
    return this.clientsList;
  }
  getClientById(): void {
    this.http.getClientById(2)
      .subscribe({
        next: (response: Clients) => {
          
          this.client = response;
          console.log(this.client)
        },
        error: (error: any) => {
          console.error('HTTP Error:', error); // Log HTTP error
        }
      });
      
  }



  CreateClient(){
    return 1;
  }
  DeleteClient() {
    return 1;
  }
  UpdateClient (){
    return 1;
  }

}
