import { mediaType } from "../../config/constants.js";
import Handler from "./Handler.js";
import requestValidator from '../../middlewares/requestValidatore.js'
import Methods from "./Methods.js";


export default [
    {
        path: '/post',
        type: mediaType.POST,
        middleware: [],
        method: Handler.registerEntryHandler,
        options:{}
    },
    {
        path: '/login',
        type: mediaType.POST,
        middleware: [],
        method: Handler.loginHandler,
        options:{}
    },
    
]