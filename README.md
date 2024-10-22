# Responsive Calculator Project

This project involves creating a responsive calculator using HTML, CSS, and JavaScript. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also includes functionality for percentage calculations and parentheses for complex expressions.

## Files Included

1. **HTML File (`index.html`)**:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <meta name="description" content="Rocking Calculator">
       <link rel="icon" type="image/gif" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QnbPyowBbQdUwGnBgh1lYhsR3awxLgsAGg&s">
       <link rel="stylesheet" href="style.css">
       <title>Rocking Calculator</title>
   </head>
   <body>
       <div class="root">
           <div class="main">
               <input type="text" readonly id="display" placeholder="0">
               <div class="buttons">
                   <button onclick="clearScreen()" class="button" id="clear">C</button>
                   <button onclick="deleteChar()" class="button backspace" id="operartions"><img src="backspace.png" alt="backspace"></button>
                   <button onclick="appendToDisplayBrackets()" class="button" id="operartions">()</button>
                   <button onclick="appendToDisplay('%')" class="button" id="operartions">%</button>
                   <button onclick="appendToDisplay('/')" class="button" id="operartions">÷</button>
                   <button onclick="appendToDisplay('7')" class="button">7</button>
                   <button onclick="appendToDisplay('8')" class="button">8</button>
                   <button onclick="appendToDisplay('9')" class="button">9</button>
                   <button onclick="appendToDisplay('*')" class="button" id="operartions">×</button>
                   <button onclick="appendToDisplay('4')" class="button">4</button>
                   <button onclick="appendToDisplay('5')" class="button">5</button>
                   <button onclick="appendToDisplay('6')" class="button">6</button>
                   <button onclick="appendToDisplay('-')" class="button" id="operartions">-</button>
                   <button onclick="appendToDisplay('1')" class="button">1</button>
                   <button onclick="appendToDisplay('2')" class="button">2</button>
                   <button onclick="appendToDisplay('3')" class="button">3</button>
                   <button onclick="appendToDisplay('+')" class="button" id="operartions">+</button>
                   <button onclick="appendToDisplay('0')" class="button">0</button>
                   <button onclick="appendToDisplay('.')" class="button">.</button>
                   <button onclick="calculate()" class="equal button" id="equal">=</button>
               </div>
           </div>
           <script src="script.js"></script>
       </div>
   </body>
   </html>
   ```

2. **CSS File (`style.css`)**:
   ```css
   body {
       margin: 0;
       padding: 0;
       font-family: sans-serif;
       background: linear-gradient(45deg, #000000, #1155a3);
   }

   .root {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }

   .main {
       margin-top: 30px;
       display: flex;
       flex-direction: column;
       align-items: center;
       height: 100vh;
       padding: 20px;
   }

   #display {
       font-style: normal;
       height: 4.5rem;
       max-height: 1000px;
       width: 30rem;
       max-width: 50rem;
       margin-bottom: 20px;
       border-radius: 20px;
       font-size: 3rem;
       text-align: right;
       padding: 1rem;
       background: linear-gradient(180deg, #ffffff, #b9cdb6);
       color: #000000;
       border: none;
       transition: background 0.5s, box-shadow 0.5s;
   }

   #display:hover {
       background: linear-gradient(180deg, #b9cdb6, #ffffff);
       box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
   }

   .buttons {
       display: grid;
       grid-template-columns: repeat(4, 1fr);
       gap: 2rem;
       padding: 1rem;
       font-size: 4rem;
       color: #c2b6b6;
       width: 100%;
       cursor: pointer;
   }

   .button {
       padding: 10px;
       font-size: 3rem;
       color: #000000;
       border: none;
       cursor: pointer;
       background: linear-gradient(180deg, #ffffff, #b9cdb6);
       border-radius: 50px;
       transition: transform 0.5s, background 0.5s, box-shadow 0.5s;
   }

   .button:hover {
       transform: scale(1.05);
       background: linear-gradient(180deg, #b9cdb6, #ffffff);
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   }

   #clear {
       color: #fa0101;
       background: linear-gradient(45deg, #1155a3, #cb6969);
       transition: transform 0.5s, background 0.5s, box-shadow 0.5s;
   }

   #clear:hover {
       transform: scale(1.1);
       background: linear-gradient(45deg, #cb6969, #1155a3);
       box-shadow: 0 0 10px rgba(250, 1, 1, 0.3);
   }

   #operartions {
       color: rgb(0, 39, 0);
       background: linear-gradient(45deg, #1155a3, #69cb73);
       transition: transform 0.5s, background 0.5s, box-shadow 0.5s;
   }

   #operartions:hover {
       transform: scale(1.1);
       background: linear-gradient(45deg, #69cb73, #1155a3);
       box-shadow: 0 0 10px rgba(0, 128, 0, 0.3);
   }

   .backspace {
       display: flex;
       align-items: center;
       justify-content: center;
       background: linear-gradient(45deg, #a3a3a3, #1b99dd) !important;
       transition: transform 0.5s, background 0.5s, box-shadow 0.5s;
   }

   .backspace img {
       width: 4rem;
   }

   .backspace:hover {
       transform: scale(1.1);
       background: linear-gradient(45deg, #1b99dd, #a3a3a3) !important;
       box-shadow: 0 0 10px rgba(27, 153, 221, 0.3);
   }

   .equal {
       color: #03321d;
       background: linear-gradient(45deg, #ffffff, #13c675) !important;
       transition: transform 0.5s, background 0.5s, box-shadow 0.5s;
   }

   .equal:hover {
       transform: scale(1.1);
       background: linear-gradient(45deg, #13c675, #ffffff) !important;
       box-shadow: 0 0 10px rgba(19, 198, 117, 0.3);
   }

   /* Media Queries for Responsiveness */
   @media (max-width: 768px) {
       #display {
           width: 20rem;
           font-size: 2rem;
           padding: 0.5rem;
       }

       .buttons {
           grid-template-columns: repeat(4, 1fr);
           gap: 1rem;
           font-size: 2rem;
       }

       .button {
           padding: 5px;
           font-size: 1.5rem;
           border-radius: 25px;
       }

       .backspace img {
           width: 2rem;
       }
   }
   //Also for 480 px
   ```

3. **JavaScript File

 (`script.js`)**:
   - Contains JavaScript functions for calculator operations like clearing the screen, appending characters to the display, handling operations, and calculating results.

## Features

- **Responsive Design**: Utilizes CSS media queries to ensure the calculator adapts to various screen sizes, from desktops to mobile devices.
- **Functional Buttons**: Each button performs specific actions such as inputting numbers and operations, clearing the display, and calculating results.
- **Stylish Interface**: Uses gradients, transitions, and hover effects to enhance user interaction and visual appeal.

## How to Use

1. Open `index.html` in a web browser.
2. Use the calculator by clicking on the buttons to input numbers and perform calculations.
3. The calculator supports basic arithmetic operations (+, -, *, /), percentage calculations (%), parentheses for grouping, and decimal points.

This project demonstrates a practical application of HTML, CSS, and JavaScript to create an interactive and responsive calculator suitable for both desktop and mobile users.
