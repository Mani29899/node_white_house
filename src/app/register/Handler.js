import httpResponse from '../../utill/HttpResponse.js';
import Methods from './Methods.js';
import service from './Services.js'
import {postRequestParser} from '../../utill/index.js'
import responseHandler from '../../utill/responseHandler.js';

class RegisterHandler {
    async registerEntryHandler(req ,res) {
        const methodName = Methods.ADD_REGISTER_TO_LOGIN;
        const credential = postRequestParser(req)
        console.log(methodName)
        try {
            const response = await service.registerEntryService(credential);
            await httpResponse(res ,response)
        } catch (error) {
            console.log('error Hanlder', error)
            HttpResponse(res, ResponseHandler.failure(methodName))
        }
    }

    async loginHandler(req, res) {
        const methodName = Methods.VERIFY_REGISTERD_USER;
        try {
            const credential = postRequestParser(req)
            const response = await service.verifyLogin(credential);
            await httpResponse(res ,response)
        } catch (error) {
            console.log(error)
            httpResponse(res ,responseHandler.failure(methodName))
        }
    }

   
}


export default new RegisterHandler();
