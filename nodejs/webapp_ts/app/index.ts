import { RequestHandler } from "./request_handler";

let request = new RequestHandler();

request.get('http://localhost:5000/api/image', 'get');
