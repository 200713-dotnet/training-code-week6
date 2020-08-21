# readme

## OLOO, not classical OOP

- OLOO = object linked to other object
- prototypal language, functional programming-like
- supports datatypes, but not strongly-typed (loosely-typed)
- datatypes = string, number, boolean, object, null, undefined
- boolean = truthy or falsy, all falsy values = false, null, 0, undefined, NaN, empty string
- null vs undefined, null = empty/no value, undefined = empty/no container/reference/address/pointer
- conditionals = >, <, >=, <=, ==, ===, !=, !==
- == vs ===, == = type coercion (1 == '1'), === = strict equality (1 === 1, true | 1 === '1', false)
- != vs !==, != = type coercion inequality, !== = strict inequality
- all JS objects have a special property called `proto`

## inheritance

- classical OOP (animal, mammal, dog) => dog inherits mammal inherits animal
- prototypal OOP (animal, mammal, dog) => dog.proto = mammal, mammal.proto = animal

```csharp
class Animal { walk() }
class Mammal : Animal {}
class Dog : Mammal {}

Dog.walk();
Dog.sleep(); // error
```

```js
Animal = Object.create();
Animal.walk = function();
Mammal = Object.create();
Mammal.prototype = Animal;
Dog = Object.create();
Dog.prototype = Mammal;

(Dog.prototype).prototype.walk();
Dog.sleep(); // undefined
```

## datatypes

- classical OOP language, the container has a type and the value must match said type
- prototypal OOP language, the container has no type, the value dictates the type

```csharp
string s = "some string"; // explicit typing for s, s cannot change type
s = 10; // error
var s = "some string"; // implicit typing for s, s cannot change type
s = 10; // error
object s = any value/reference type
```

```js
var s = 'some string'; // s points/alias to a value that happens to string
s = 10;  // s points/alias to another value that happens to be numeric
// in both lines, s is a type-less container, the value holds its type

directives:
var = do not use, unless the codebase is active, bound to scope where defined
let = preferred/recommendded for all new code, bound to created self-scope
const = preferred/recommended for all new code, bound to created self-scope

print(s); // works
print(s2); // error
print(s3); // error

var s = 10;
let s2 = 10;
const s3 = 10;

print(s); // works
print(s2); // works
print(s3); // works
```

## questions

1. can you explain what is JS in a few words?
2. would you say that JS is a compiled language and why?
3. would you say that JS is a strongly-typed language and why?
4. how is JS different than TS?
5. how would you explain hoisting?
6. what are the many ways that you can create an object?
7. what are the many ways that you can create a function?
8. is there a difference between compiled and interprested?
9. is there a difference between transpiled and compiled?
10. what are some of the benefits of using TS?
11. how would you explain the SPA design pattern?
12. can you explain what is Angular in a few words?
13. can you explain what is TS in few words?
14. which is better type coercion or strict equality and why?
15. can you explain the difference between TS module and NG module?
16. what are the different types of binding in Angular?
17. can you walk me through the architeture of an Angular app?
18. how do you implement routing in Angular?
19. how would you explain Ajax? (read about XHR = xml http request)
20. how do you implement Ajax in TS?
21. how do you implement a module in TS?
22. what are the different structures available in Angular?
23. can you explain the difference between function and arrow function in JS?
24. what is the purpose of hoisting?
25. what is the purpose of closure?
26. what are the different scopes in JS?
27. what are the different scopes in Angular?
28. is there any difference between var and let?
29. what is the purpose of using strict in JS?
30. can you explain the concepts of bundling and minification?
31. can you walk me through a request workflow to an Angular app?
