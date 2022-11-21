import httpResponse from '../../utill/HttpResponse.js';
import Methods from './Methods.js';
import service from './Services.js'
import {postRequestParser,getRequestParser} from '../../utill/index.js'
import ResponseHandler from '../../utill/responseHandler.js';

class RegisterHandler {
    async getUserList(req ,res) {
        const methodName = Methods.GET_USER_LIST;
        const params = getRequestParser(req)
        console.log(methodName)
        try {
            const response = await service.getUserListService(params);
            await httpResponse(res ,response)
        } catch (error) {
            console.log('error Hanlder', error)
            httpResponse(res, ResponseHandler.failure(methodName))
        }
    }

    async addUserList(req, res) {
        const methodName = Methods.ADD_USER_LIST;
        try {
            const credential = postRequestParser(req)
            const response = await service.addUserListService(credential);
            await httpResponse(res ,response)
        } catch (error) {
            console.log(error)
            httpResponse(res ,ResponseHandler.failure(methodName))
        }
    }

   
}


export default new RegisterHandler();
