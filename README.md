# Dictionary web app - Frontend Mentor Challenge

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to search for words using the input field, see the Free Dictionary API's response for the searched word, see a form validation message when trying to submit a blank form, play the audio file for a word when it's available, switch between serif, sans serif, and monospace fonts, switch between light and dark themes, view the optimal layout for the interface depending on their device's screen size.

### Links

- Solution URL: [Dictionary web app using React](https://www.frontendmentor.io/solutions/dictionary-web-app-using-react-library-9zov1cGkiw)
- Live Site URL: [Dictionary web app](https://anthony-dictionary-web.netlify.app/)

## My process

### Built with

- CSS custom properties
- Flexbox, CSS Grid
- Vite
- [React](https://reactjs.org/) - JS library
- [Free Dictionary API](https://dictionaryapi.dev/)

### What I learned

I learned about the `watchMedia` method among with `prefers-color-scheme` media query, which allows developers to detect the user's preferred color scheme. This is a very useful feature for developers, as it allows them to provide a better user experience by automatically adapting the color scheme of the website to the user's preferences.

```js
const [theme, setTheme] = useState("light");

useEffect(() => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkMode = mediaQuery.matches;

  if (prefersDarkMode) {
    setTheme("dark");
  }
}, []);
```

The variables fonts was something I had never done before, so I had to do some research on how to do it. I ended up using the `font-variation-settings` property, which allows me to change the font's weight and width.

```css
:root {
  --font-weight: 400;
  --font-width: 100;
}

body {
  font-variation-settings: "wght" var(--font-weight), "wdth" var(--font-width);
}
```

I also created a custom hook for localStorage, which allows me to store the user's settings in the browser's local storage. This way, the user's settings are saved even if they close the browser.

```js
import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return JSON.parse(item) ?? initialValue;
  });

  const saveToLocalStorage = (value) => {
    // Set to state
    setStoredValue(value);

    // Save to actual local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, saveToLocalStorage, setStoredValue];
}
```

### Continued development

I want to continue learning about more PostCSS add-ons, such as [postcss-preset-env](https://preset-env.cssdb.org/), which allows me to use the latest CSS features, such as `font-variation-settings`, without worrying about browser compatibility.

And want to create a project in React with TypeScript to take advantage of the type system and improve the code quality.

### Useful resources

- [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) - This article helped me understand how to detect the user's preferred color scheme.

- [font-variation-settings](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings) - This article helped me understand how to use the `font-variation-settings` property.

- [useLocalStorage](https://usehooks.com/useLocalStorage/) - This article helped me understand how to create a custom hook for localStorage.

## Author

- Frontend Mentor - [@874anthony](https://www.frontendmentor.io/profile/874anthony)
- Twitter - [@874anthony](https://twitter.com/874anthony)
- GitHub - [@874anthony](https://github.com/874anthony)
- LinkedIn - [Anthony Acosta](https://www.linkedin.com/in/anthony-acosta-montes/?locale=en_US)
