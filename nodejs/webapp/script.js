// OUTLINE - PSEUDO CODE
// let img = document.querySelector('#img-placeholder');
// let http = new httpClient();
// let response = http.get('localhost:5000/api/pikture');
// img.src = response.body;

// REAL CODE
let img = document.querySelector('img');

let http = window.fetch; // Fetch API

let pass = function (blah) { // function expression, function-scope
  console.log(this.name); // scope of nameless/anonymous function scope
  blah.text().then((result) => {
    img.setAttribute('src', result);
  })
}

let fail = () => { // function expression, invocation-scope
  console.log(this.name);
  console.log('i am a function too');
}

http('http://localhost:5000/api/image', { method: 'get' }).then(pass, () => {});

function someFunc() {
  this.name = 'fred';

  pass(); // scope = pass, this.name -> undefined

  fail(); // scope = someFunc, this.name -> 'fred'
}
