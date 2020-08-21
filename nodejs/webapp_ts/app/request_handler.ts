import { ResponseHandler } from "./response_handler.js";

export class RequestHandler {
  get(url: string, httpMethod: string) : void {
    let responseHandler = new ResponseHandler();

    fetch(url, { method: httpMethod}).then(responseHandler.pass, responseHandler.fail);
  }
}
