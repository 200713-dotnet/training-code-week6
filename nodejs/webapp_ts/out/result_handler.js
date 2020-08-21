export class ResultHandler {
    pass(element, data) {
        element.setAttribute('src', data);
    }
    fail(data) {
        console.error(data);
    }
}
//# sourceMappingURL=result_handler.js.map