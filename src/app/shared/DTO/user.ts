export class User {
    ID: number;
    Name: string;
    Username: string;
    Email: string;
    DateOfBirth: string;
    Phone: string;
    Password: string;
    IsAdmin: boolean;
    IsPrimeMember: boolean;

    constructor(ID: number, Name: string, Username: string, Email: string, DateOfBirth: string, Phone: string, Password: string, IsAdmin: boolean, IsPrimeMember: boolean) {
        this.ID = ID;
        this.Name = Name;
        this.Username = Username;
        this.Email = Email;
        this.DateOfBirth = DateOfBirth;
        this.Phone = Phone;
        this.Password = Password;
        this.IsAdmin = IsAdmin;
        this.IsPrimeMember = IsPrimeMember;
    }
}
