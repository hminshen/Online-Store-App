import { NextFunction } from "express";
import {UserRole} from '../common/types/backendEnums';


// checkIfLoggedInAPI   - auth failures send 401 requrest. use this for API routes
function checkIfLoggedInAPI(req : any, res : any, next : NextFunction) {
    if (req.user === undefined)
      return res.status(401).json("you are not logged in");
    next();
  }

  function checkIfAdmin(req : any, res : any, next : NextFunction) {
    // If not admin, then reject
    if (req.user.role_id != UserRole.Admin) 
      return res.status(401).json("you are not admin");
    next();
  }

export {
    checkIfLoggedInAPI,
    checkIfAdmin
}