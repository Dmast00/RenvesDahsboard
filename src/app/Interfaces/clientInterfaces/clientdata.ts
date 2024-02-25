export interface ClientData{
    data: clientdataarray[] | null; // Array of ClientData objects
    errors: any[] | null;
    pageNumber: number;
    pagesize: number;
    success: boolean;
    message: string | null;
      
}

export interface clientdataarray {
    client_id: number;
    client_Name: string;
    client_LastName: string;
    client_PhoneNumber: string;
    client_Email: string;
    client_Register_Date: Date;
  }