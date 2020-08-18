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
