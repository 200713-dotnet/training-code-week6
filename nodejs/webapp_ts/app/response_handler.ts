import { ResultHandler } from "./result_handler";

export class ResponseHandler {
  pass(response: any): void {
    let result = new ResultHandler();
    let img: any = document.querySelector('img');

    response.text().then((data: any) => { result.pass(img, data); }, result.fail)
  }

  fail(response: any): void {
    console.error(response);
  }
}
