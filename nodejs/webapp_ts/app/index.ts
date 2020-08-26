import { RequestHandler } from "./request_handler.js";
import { RequestHandler } from "./request_handler";

let request: RequestHandler = new RequestHandler();

request.get('http://localhost:5000/api/image', 'get');
