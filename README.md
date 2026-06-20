# Task Manager Application

A modern and responsive Task Manager application built using HTML, CSS, and JavaScript. This project demonstrates how browsers process web pages through Parsing, Tokenization, DOM Tree, CSSOM Tree, and Render Tree creation.

## Live Demo

🔗 Live Website: https://d2qm5g.csb.app/

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Clear all tasks
- Responsive design
- Dark/Light theme toggle
- Local Storage support
- Dynamic DOM manipulation

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- DOM Manipulation
- Local Storage API

---

# Browser Working Concepts

## 1. Parsing

Parsing is the process where the browser reads the HTML and CSS code and converts it into structures that can be understood and rendered on the screen.

### HTML Parsing
The browser reads HTML elements and creates the DOM Tree.

### CSS Parsing
The browser reads CSS rules and creates the CSSOM Tree.

---

## 2. Tokenization

Tokenization is the process of breaking HTML code into smaller pieces called tokens.

Example:

```html
<h1>Hello World</h1>
```

Tokens:

- Opening Tag → `<h1>`
- Text Content → `Hello World`
- Closing Tag → `</h1>`

These tokens are later used to build the DOM Tree.

---

## 3. DOM Tree

DOM (Document Object Model) is a tree-like structure created from HTML.

Example:

```html
<body>
    <h1>Task Manager</h1>
    <button>Add Task</button>
</body>
```

DOM Tree:

```

Document
│
└── html
│
└── body
├── h1
└── button

```

JavaScript interacts with the webpage through the DOM.

Example:

```javascript
document.querySelector("button");
```

---

## 4. CSSOM Tree

CSSOM (CSS Object Model) is created from CSS rules.

Example:

```css
button {
    background: blue;
    color: white;
}
```

CSSOM stores styling information for each element.

---

## 5. Render Tree

The browser combines:

- DOM Tree
- CSSOM Tree

to create the Render Tree.

The Render Tree contains only visible elements and is used to display the webpage on the screen.

Process:

```

HTML
↓
Tokenization
↓
DOM Tree

CSS
↓
Tokenization
↓
CSSOM Tree

DOM + CSSOM
↓
Render Tree
↓
Layout
↓
Paint
↓
Screen Output

```

---

## Project Structure

```bash
project/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone the repository.

```bash
git clone <repository-url>
```

2. Open the project folder.

3. Run `index.html` in your browser.

---

## Learning Outcomes

This project helps understand:

- DOM Manipulation
- Event Handling
- Local Storage
- Parsing
- Tokenization
- DOM Tree
- CSSOM Tree
- Render Tree
- Browser Rendering Process

## Author

**Satyaban Pradhan**

BCA Student | Web Developer

## License

This project is created for educational purposes.
