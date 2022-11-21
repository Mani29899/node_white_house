import Entity from '../../entity/index.js'
import responseHandler from '../../utill/responseHandler.js';
import Methods from './Methods.js';

class RegisterServices {
    async registerEntryService(credential) {
        const methodName = Methods.ADD_REGISTER_TO_LOGIN;
        console.log(methodName);
        try {
            let registerdUser = await Entity.RegisterUser.findOne();
            if (!registerdUser) {
                await Entity.RegisterUser.create({
                    email: credential && credential.email,
                    username: credential && credential.username,
                    created_at: new Date()
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

            if (credential.username && credential.email) {
                const verifiedUser = await Entity.RegisterdUser.findOne({
                    where: {
                        username: credential && credential.username,
                        email: credential && credential.email
                    }
                })

                if (verifiedUser) {
                    let user = await Entity.RegisterUser.create({
                        username: credential && credential.username,
                        email: credential && credential.email,
                    })
                    return responseHandler.success(methodName, user, 'SUCCESS')
                } else {
                    return responseHandler.invalid(methodName, 'Credential is not valid need to register')
                }

            } else {
                responseHandler.invalid(methodName, 'Need Users all Credential to login')
            }

        } catch (error) {
            console.log('hit comes')
            return responseHandler.failure(methodName, 'sorry something went wrong')
        }
    }


}

export default new RegisterServices();