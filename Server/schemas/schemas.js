import sql from 'mssql';

export const friendZoneUserSchema = {

    User_Id: sql.UniqueIdentifier,
    FirstName: sql.VarChar(255),
    LastName: sql.VarChar(255),
    Email: sql.VarChar(255),
    PasswordHash: sql.VarChar(255),
    PhoneNumber:sql. VarChar(50),
    Profile_Picture_Url: sql.VarChar(255),
    Bio: sql.VarChar(1000)

};