import { Component } from '@angular/core';
import { Clients } from 'src/app/Interfaces/clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements Clients{

  client_id!: number;
  client_name!: string;
  client_lastname!: string;
  client_phonenumber!: string;
  client_email!: string;
  client_register_date!: Date;
  clientsList : Clients[] = []
  client! : Clients;
  constructor() 
  {

  }

  GetAllClients():Clients[]{
    return this.clientsList;
  }
  GetClientById () {
    return this.client
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
