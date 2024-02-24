export interface Clients {
    client_id : number;
    client_name : string;
    client_lastname :string;
    client_phonenumber : string;
    client_email : string;
    client_register_date : Date;

    GetAllClients:() => Clients[];
    GetClientById:() => Clients;
    CreateClient:() => number;
    DeleteClient:() => number;
    UpdateClient:() => number
}
