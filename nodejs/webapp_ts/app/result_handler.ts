export class ResultHandler {
  pass(element: HTMLImageElement, data: any): void {
    element.setAttribute('src', data);
  }

  fail(data: any): void {
    console.error(data);
  }
}
