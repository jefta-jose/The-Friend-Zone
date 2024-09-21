import {
  allFriendZoneUsersService,
  createFrindZoneUserService,
} from "../services/userServices.js";



export const allFriendZoneUsersController = async (req, res) => {
  try {
    const request = await allFriendZoneUsersService();
    if (request.length === 0) {
      return res.status(404).json({message: "users not found"});
    } else {
      return res.status(201).json({ message: "All users", request });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "internal server error"});
  }
};

export const createFrindZoneUserController = async (req,res) =>{
    try {
        const userData = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            PasswordHash: req.body.PasswordHash,
            PhoneNumber: req.body.PhoneNumber,
            Profile_Picture_Url: req.body.Profile_Picture_Url,
            Bio: req.body.Bio,
    
        };

        const request = await createFrindZoneUserService(userData)
        
        return res.status(201).json({ message: "user created successfully", request });
    } 
    
  catch (error) {
      console.log(error);
      return res.status(500).json({message: "internal server error"});
    }
}
