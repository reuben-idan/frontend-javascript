# frontend-javascript

This repository contains a series of TypeScript-based frontend projects and exercises focused on fundamental and advanced TypeScript concepts. The structure is organized into tasks that demonstrate practical implementations of interfaces, classes, inheritance, and build tooling in a modern JavaScript environment.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Build & Development](#build--development)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository is designed for learning and experimenting with TypeScript in frontend development. Each subdirectory under `0x04-TypeScript` represents a distinct task or lesson, focusing on specific TypeScript and frontend concepts such as interface design, class implementation, DOM manipulation, and modular code organization.

## Project Structure

```
0x04-TypeScript/
  ├── task_0/
  │   ├── index.html
  │   ├── js/
  │   │   └── main.ts
  │   └── webpack.config.js
  ├── task_1/
  ├── task_2/
  ├── task_3/
  ├── task_4/
  ├── task_5/
  └── ...
```

- Each `task_*` folder contains TypeScript source files, configuration for building with Webpack, and, where relevant, HTML files for browser output.

## Key Features

- **Strongly Typed Code:** Leverages TypeScript interfaces and classes for type safety and maintainability.
- **Component-Based Structure:** Tasks are modular and demonstrate separation of concerns.
- **Build Tooling:** Configured with Webpack for bundling TypeScript into browser-ready JavaScript.
- **DOM Manipulation:** Example projects include rendering dynamic content like tables based on object data.
- **OOP Concepts:** Demonstrates inheritance, interface extension, and implementation details.

## Technologies Used

- **TypeScript**
- **JavaScript (ECMAScript 2020+)**
- **Webpack**
- **ESLint** (with `@typescript-eslint` plugin for code quality)
- **HTML5/CSS3**

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/reuben-idan/frontend-javascript.git
   cd frontend-javascript
   ```

2. **Install dependencies:**
   Each task may have its own dependencies. Navigate into a task directory and install as necessary:
   ```sh
   cd 0x04-TypeScript/task_0
   npm install
   ```

3. **Build the project:**
   Use Webpack to bundle the TypeScript code:
   ```sh
   npx webpack
   ```

4. **Run locally:**
   Open the corresponding `index.html` in your browser to see the result.

## Build & Development

- **Webpack Configuration:** Each task contains its own `webpack.config.js` for building TypeScript.
- **Source Maps:** Enabled for easier debugging in development mode.
- **Output:** Bundles are generated in a `dist/` directory inside each task.

## Code Quality

- **Linting:** ESLint with TypeScript support is set up in most tasks (see `.eslintrc.js` in each directory).
- **Style:** Follows modern JavaScript and TypeScript best practices.

## Contributing

Contributions are welcome. If you'd like to add new tasks, improve existing code, or suggest enhancements, please open an issue or submit a pull request.

## License

This repository does not currently specify a license. Please contact the repository owner for usage guidelines.
