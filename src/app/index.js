import express from 'express';
import { routeMethodOptions } from '../app/processRoutes.js'
import registerArray from '../app/register/index.js'
import userListArray from '../app/UserList/index.js'
 



let registerRouter = express.Router();
if (registerArray && registerArray.length > 0) {
    registerRouter = routeMethodOptions(registerRouter, registerArray)
} else {
    console.error('There is o employee Routes Configuered')
}

let userListRouter = express.Router();
if (userListArray && userListArray.length > 0) {
    userListRouter = routeMethodOptions(userListRouter, userListArray)
} else {
    console.error('There is o employee Routes Configuered')
}






export {registerRouter ,userListRouter}