import { RequestHandler } from "./request_handler.js";
import { ResponseHandler } from "./response_handler.js";

let request: RequestHandler = new RequestHandler();

request.get('http://localhost:5000/api/image', 'get');
