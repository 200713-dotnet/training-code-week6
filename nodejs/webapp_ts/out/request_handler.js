import { ResponseHandler } from "./response_handler.js";
export class RequestHandler {
    get(url, httpMethod) {
        let responseHandler = new ResponseHandler();
        fetch(url, { method: httpMethod }).then(responseHandler.pass, responseHandler.fail);
    }
}
//# sourceMappingURL=request_handler.js.map