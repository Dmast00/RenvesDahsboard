import { Component } from '@angular/core';
import { Clients } from 'src/app/Interfaces/clientInterfaces/clients';
import { DataAccessService } from '../../app/Services/data-access.service';
import { stringToArray } from 'konva/lib/shapes/Text';
import { ClientData } from 'src/app/Interfaces/clientInterfaces/clientdata';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent{

  clientsList = []
  client: Clients | null = null; // Initialize client data
  clientData : ClientData | null = null
  DataSourceClients : any = new MatTableDataSource([])
  displayedColumns : string[] = ['client_id','client_Name','client_LastName','client_Email','client_PhoneNumber','client_Register_Date']
  form : FormGroup

  constructor(private http : DataAccessService) {
    this.form = new FormGroup({
      client_name  : new FormControl(),
      client_LastName : new FormControl(),
      client_phoneNumber : new FormControl(),
      client_email : new FormControl(),
      client_Register_Date: new FormControl()
    })
   }

  
  ngOnInit(){
    this.GetAllClients();
    
  }

  get f(){
    return this.form.controls
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
    const currentDate = new Date();
    const currentDateTimeString = currentDate.toISOString();
    this.form.patchValue({client_Register_Date : currentDateTimeString})
    this.http.PostClient(this.form.value)
    .subscribe(data =>{
      this.GetAllClients();
    })
    this.form.reset();
  }
  DeleteClient() {
    return 1;
  }
  UpdateClient (){
    return 1;
  }

}
