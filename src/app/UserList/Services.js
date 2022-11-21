import Entity from '../../entity/index.js'
import { paginatedResults } from '../../utill/pagination.js';
import responseHandler from '../../utill/responseHandler.js';
import Methods from './Methods.js';

class RegisterServices {
    async getUserListService(params) {
        const methodName = Methods.GET_USER_LIST;
        console.log(methodName);
        try {
            let userList = await Entity.UserList.findAll();
            if(userList.length > 0) {
               userList = await paginatedResults(userList ,params);
              return responseHandler.success(methodName ,userList,'SUCCESS')
            }else {
              return responseHandler.success(methodName,userList,'SUCCESS')
            }
        } catch (error) {
            return responseHandler.failure(methodName, 'Sorry something went wrong ');
        }
    }

    async addUserListService(credential) {
        const methodName = Methods.ADD_USER_LIST;
        console.log(methodName);
        try {
            if (credential) {
                const existingUser = await Entity.UserList.findOne({
                    where: {
                        email: credential && credential.email,
                        whatsapp:credential && credential.whatsapp
                    }
                })
                if (!existingUser) {
                    let user = await Entity.UserList.create({
                        firstName: credential && credential.firstName,
                        lastName: credential && credential.lastName,
                        userName: credential && credential.userName,
                        email: credential && credential.email,
                        city: credential && credential.city,
                        country: credential && credential.country,
                        skype: credential && credential.skype,
                        whatsapp: credential && credential.whatsapp,
                        telegram: credential && credential.telegram,
                        facebook: credential && credential.facebook,
                        instagram: credential && credential.instagram,
                        createdAt: credential && new Date(),
                    })
                    return responseHandler.success(methodName, user, 'SUCCESS')
                } else {
                    return responseHandler.invalid(methodName, 'User is already existed')
                }

            } else {
                responseHandler.invalid(methodName, 'Need Users all Credential to login')
            }

        } catch (error) {
            return responseHandler.failure(methodName, 'sorry something went wrong')
        }
    }


}

export default new RegisterServices();