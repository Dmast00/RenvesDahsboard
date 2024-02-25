import { Component } from '@angular/core';
import { Clients } from 'src/app/Interfaces/clientInterfaces/clients';
import { DataAccessService } from '../../app/Services/data-access.service';
import { stringToArray } from 'konva/lib/shapes/Text';
import { ClientData } from 'src/app/Interfaces/clientInterfaces/clientdata';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent{

  clientsList = []
  client: Clients | null = null; // Initialize client data
  clientData : ClientData | null = null
  DataSourceClients : any = new MatTableDataSource
  displayedColumns : string[] = ['client_id','client_Name','client_LastName','client_Email','client_PhoneNumber','client_Register_Date']
  constructor(private http : DataAccessService) { }

  
  ngOnInit(){
    this.GetAllClients();
  }

  GetAllClients(): void {
    this.http.GetAllClients()
      .subscribe({
        next: (response: ClientData) => {
          this.clientData = response;
          this.DataSourceClients = this.clientData.data
        },
        error: (error: any) => {
          console.error('HTTP error', error);
        }
      });
  }


  getClientById(): void {
    this.http.getClientById(2)
      .subscribe({
        next: (response: Clients) => {        
          this.client = response;
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
