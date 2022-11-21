import responseHandler from "../utill/responseHandler.js";
import httpResponse from "../utill/HttpResponse.js";

const requestValidator = (methodName, schema) => {
    return (req, res, next) => {
        console.log(req.body)
        const { error } = schema.unknown(true).validate(req.body);
        const valid = error == undefined;
        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');
            console.log(message);
            httpResponse(res ,responseHandler.invalid(methodName ,message))
        }
    }
}

export default requestValidator;