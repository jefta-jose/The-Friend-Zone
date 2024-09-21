import {
  allFriendZoneUsersService,
  createFrindZoneUserService,
} from "../services/userServices.js";

import {
  sendNotFound,
  successMessage,
  sendServerError,
} from "../helpers/helperFunctions.js";

export const allFriendZoneUsersController = async (req, res) => {
  try {
    const request = await allFriendZoneUsersService();
    if (request.length === 0) {
      sendNotFound(res, "No FriendZOne Users Found");
    } else {
      successMessage(res, request);
    }
  } catch (error) {
    sendServerError(res, error);
  }
};

export const createFrindZoneUserController = async (req,res) =>{
    try {
        const userData = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            PasswordHash: req.body.Password,
            PhoneNumber: req.body.NationalID,
            Profile_Picture_Url: req.body.County,
            Residence: req.body.Residence,
            Bio: req.body.PhoneNumber,
    
        };

        const request = await createFrindZoneUserService(userData)
        successMessage("user created successfully", request);

    } catch (error) {
        sendServerError(res,error)
    }
}
