export interface Clients {
    data: {
        client_id: number;
        client_Name: string;
        client_LastName: string;
        client_PhoneNumber: string;
        client_Email: string;
        client_Register_Date: Date;
    } | null;
    errors: any[] | null;
    message: string | null;
    success: boolean;

   
}
