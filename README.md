# Auth UI

## Overview

`Auth UI` is a customizable authentication user interface package built with **React** and **Tailwind CSS**. This package provides easy-to-use Login and Register forms that can be quickly integrated into any React project. Tailored for developers who need an elegant and responsive authentication UI, this package offers customization flexibility to match your project's design.

## Features

- **LoginForm** and **RegisterForm** components
- Styled with **Tailwind CSS**
- Fully customizable UI through props
- **TypeScript** support
- Lightweight and easy to integrate

## Installation

Install the package via npm:

```bash
npm install e-com-auth-ui
||
yarn add e-com-auth-ui
```

## Usage

Import the components into your project and customize them as needed.

# Example Usage

Here is a simple example of how to use the LoginForm and RegisterForm components:

```bash
import React from "react";
import { LoginForm, RegisterForm } from "your-unique-auth-ui-name";

const App = () => {
const customStyle = {
form: "bg-gray-100 p-4 rounded-lg shadow-md",
input: "border p-2 w-full rounded-md mb-4",
button: "bg-blue-500 text-white p-2 rounded-lg"
};

return (

<div className="container mx-auto">
<h1 className="text-3xl font-bold mb-6">Welcome to Auth UI</h1>
<LoginForm customStyle={customStyle} />
<RegisterForm customStyle={customStyle} />
</div>
);
};

export default App;
```

# Customizing Styles

You can override the default styles by passing a customStyle object as a prop. Customize the styles for the form, input, and button using Tailwind CSS classes.

```bash
const customStyle = {
form: "custom-tailwind-classes",
input: "custom-tailwind-classes",
button: "custom-tailwind-classes"
};
```

# Tailwind CSS Configuration

If you need to extend or modify the default Tailwind configuration, you can do so by adjusting your tailwind.config.js

```bash
module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
};
```

# Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue on the GitHub repository. Make sure to follow the contribution guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
