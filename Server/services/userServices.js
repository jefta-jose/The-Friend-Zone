import { checkEmailExists, hashPassword, insertData } from "../helpers/helperFunctions.js";
import { poolRequest } from "../utils/config.js";
import Logger from "../utils/Logger.js";
import { friendZoneUserSchema } from "../schemas/schemas.js";
import { v4 as uuidv4 } from 'uuid';

export const allFriendZoneUsersService = async () => {
    try {
        const request = await poolRequest().query(" SELECT * FROM FriendZoneUsers ");
        return request.recordset;

    } catch (error) {
        Logger.error(error)
    }
}

export const createFrindZoneUserService = async (friendZoneUserData) =>{
    try {
        //destructure required fields
        const {Email, PasswordHash, ...moreData} = friendZoneUserData;

        //cehck if email exists
        const checkEmail = await checkEmailExists(Email);
        if(checkEmail){
            throw new Error ("Email Alredy Exists");
        }

        //hash the password
        const hashedPassword = await hashPassword(PasswordHash);

        //prepare user data for insertion
        const uniqueID= uuidv4();

        const userData = {
            User_Id: uniqueID,
            FirstName: moreData.FirstName,
            LastName: moreData.LastName,
            Email: Email,
            PasswordHash: hashedPassword,
            PhoneNumber: moreData.PhoneNumber,
            Profile_Picture_Url: moreData.Profile_Picture_Url,
            Bio: moreData.Bio,
        };

        //insert the new user into the database.
        await insertData(`FriendZoneUsers`, userData, friendZoneUserSchema);

    } catch (error) {
        console.log(error);
    }
}