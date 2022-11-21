import { mediaType } from "../../config/constants.js";
import Handler from "./Handler.js";
import Methods from "./Methods.js";


export default [
    {
        path: '/',
        type: mediaType.GET,
        middleware: [],
        method: Handler.getUserList,
        options:{}
    },
    {
        path: '/add',
        type: mediaType.POST,
        middleware: [],
        method: Handler.addUserList,
        options:{}
    },
    
]