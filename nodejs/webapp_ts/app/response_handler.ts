import { ResultHandler } from "./result_handler";

export class ResponseHandler {
  pass(response: any): void {
    let result = new ResultHandler();
    let img: HTMLImageElement = document.querySelector('img');

    response.text().then((data) => { result.pass(img, data); }, result.fail)
  }

  fail(response: any): void {
    console.error(response);
  }
}
