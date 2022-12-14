import { mediaType } from "../../config/constants.js";
import Handler from "./Handler.js";



export default [
    {
        path: '/',
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