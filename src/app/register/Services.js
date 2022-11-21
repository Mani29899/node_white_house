import Entity from '../../entity/index.js'
import responseHandler from '../../utill/responseHandler.js';
import Methods from './Methods.js';

class RegisterServices {
    async registerEntryService(credential) {
        const methodName = Methods.ADD_REGISTER_TO_LOGIN;
        console.log(methodName);
        try {
            let registerdUser = await Entity.RegisterUser.findOne({
                where: {
                    userName: credential && credential.userName,
                    email: credential && credential.email
                }
            });
            if (!registerdUser) {
                registerdUser = await Entity.RegisterUser.create({
                    email: credential && credential.email,
                    userName: credential && credential.userName,
                    createdAt: new Date()
                });
                return responseHandler.success(methodName, registerdUser, 'SUCCESS')
            } else if (registerdUser) {
                return responseHandler.invalid(methodName, 'Registered user already exists')
            } else if (credential.email || credential.username) {
                return responseHandler.invalid(methodName, 'User credential not recieved')
            }
            return responseHandler.success(methodName, registerdUser)
        } catch (error) {
            return responseHandler.failure(methodName, 'Sorry something went wrong ');
        }
    }

    async verifyLogin(credential) {
        const methodName = Methods.VERIFY_REGISTERD_USER;
        console.log(methodName);
        try {
            if (credential.userName && credential.email) {
                const verifiedUser = await Entity.RegisterUser.findOne({
                    where: {
                        userName: credential && credential.userName,
                        email: credential && credential.email
                    }
                })
                if (verifiedUser) {
                    return responseHandler.success(methodName, verifiedUser, 'SUCCESS')
                } else {
                    return responseHandler.invalid(methodName, 'Credential is not valid need to register')
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