// OUTLINE - PSEUDO CODE
// let img = document.querySelector('#img-placeholder');
// let http = new httpClient();
// let response = http.get('localhost:5000/api/pikture');
// img.src = response.body;

// REAL CODE
let img = document.querySelector('img');

let http = window.fetch; // Fetch API

let pass = function (response) {
  response.text().then((result) => {
    img.setAttribute('src', result);
  })
}

http('http://localhost:5000/api/image', { method: 'get' }).then(pass, function () {});
