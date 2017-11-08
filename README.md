# Prototypes in JS Lab

## Objectives

1. Define a Class property
2. Build a Class function
3. Access a Class property from an instance function.
4. Build a Class function that access a Class property.

## Instructions

The goal of this lab is to build a `Question` class in `index.js` that can store all instances, save them, retrieve them, and find them. 

### `Question` Class

Define a `Question` class using the `class` syntax of Javascript.

### `_All` Class Property

Add a property, `_All` to the `Question` class and initialize its value to an empty Array.

### `.All()` Class function

Define a class function with the `static` keyword, `All()` that returns the value of the class property `_All`.

### `save()` instance function

Define a `save()` instance function that can add the instance to the `_All` class property.

### `constructor(content)`

The `Question` constructor should accept the content of the question and set that as an instance property of the question via a `question` instance property.

Additionally, the constructor should save the new instance by calling the `save()` instance function.

### `.Find(id)` class function

Build a `static` class function that can return the question by Id. The function should allow you to reference the Id of the question, not its index within the `_All` array. If there are `3` questions in `_All`, `Find(2)` should return the second one, not the 3 one.

