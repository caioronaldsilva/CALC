# CALC | Web Calculator

A lightweight, mobile-first calculator built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

## Features

- Basic arithmetic: addition, subtraction, multiplication, and division
- Decimal point support
- Clear (AC) button to reset the input
- Responsive layout designed for mobile screens

## How It Works

The calculator is built around three simple steps:

1. **Listen** — Every button has a click event listener attached to it.
2. **Show** — Clicked values are appended to a string and displayed on screen.
3. **Resolve** — When `=` is pressed, the string is evaluated and the result is shown.

## Technologies

- HTML5
- CSS3 (Grid layout, Flexbox)
- JavaScript (Vanilla, no libraries)

## Running Locally

No build step required. Just open `index.html` in any modern browser.

## Notes

- The layout uses CSS Grid with a `2fr 1fr` split between the number pad and operators.
- The screen occupies the top `20vh` and the button area fills the remaining `80vh`.
- Expression evaluation uses the `Function` constructor with `"use strict"` mode.