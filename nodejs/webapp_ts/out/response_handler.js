import { ResultHandler } from "./result_handler";
export class ResponseHandler {
    pass(response) {
        let result = new ResultHandler();
        let img = document.querySelector('img');
        response.text().then((data) => { result.pass(img, data); }, result.fail);
    }
    fail(response) {
        console.error(response);
    }
}
//# sourceMappingURL=response_handler.js.map