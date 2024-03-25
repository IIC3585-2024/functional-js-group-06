# Markdown to HTML - Group 6

Markdown to HTML Javascript converter for basic markdown syntax. 

## Web

Available in: [https://wasm.cparedesr.com/](https://wasm.cparedesr.com/)

## How to run

### Install Dependencies
```
npm install
```

### Run
```
npm start
``` 

Then open http://127.0.0.1:8080/ in your browser, type or paste any Markdown text and watch how it displays as HTML.

## Supported Features

- [x] Headers (h1 to h6)
- [x] Emphasis
    - [x] Bold (__ and **)
    - [x] Italic (_ and *)
    - [x] Bold and Italic
- [x] Ordered Lists (normal and nested)
- [x] Unordered Lists (*, - , + syntax and nested lists)
- [x] Code
- [x] Paragraph
- [x] Blockquotes (normal and nested)
- [x] Links
- [x] Images

## Functional Programming

This code follows the functional programming paradigm by emphasizing higher-order functions, function composition, and immutable state. It relies on pure functions that produce consistent outputs given the same inputs and minimizes side effects, resulting in a clear, modular, and reliable implementation. Here are some examples:

- The createConverter function in markdownParser.js is a higher-order function that returns a new function. This is a common pattern in functional programming.
- The convertMarkdownToHtml function in markdownParser.js uses function composition. It applies a series of transformations (each one a function) to the input markdown text.
- The code avoids changing state. For example, the createConverter function doesn't change any external variables. It takes some inputs and returns a new function.
- The code uses pure functions. For example, all the convert functions in markdownParser.js are pure functions. Given the same input, they will always produce the same output.
- The code avoids side effects. Each function is self-contained and only depends on its input. For example, the convertBold function in markdownParser.js doesn't depend on any external state.

## Team 

- Valentina Campaña
- Cristóbal Carrasco
- Carlos Paredes