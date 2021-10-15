# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](https://i.im.ge/2021/10/16/orVgTM.png)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Material-ui](https://mui.com/) - For styles

### What I learned

The main goal is to learn how to add overlay on background images and to design a ui that i cross browser compactiable

```App.js
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import StatsPreviewCard from "./components/StatsPreviewCard";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function App() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matchesMD ? (
        <Container maxWidth="xs" disableGutters sx={mainContainer}>
          <CssBaseline />
          <StatsPreviewCard />
        </Container>
      ) : (
        <Container maxWidth="lg" disableGutters sx={mainContainer}>
          <CssBaseline />
          <StatsPreviewCard />
        </Container>
      )}
    </>
  );
}

const mainContainer = {
  fontSize: "15px",
  fontFamily: "inter, sans-serif",
  p: "5rem 1.5rem",
};

export default App;

```

### Continued development

When the using flexbox order to order element the i want it i had problem with the appling good padding to the project and in my next project i will work on that.

## Author

- Website - [Nweze Daniel](https://daniel-nweze.netlify.app/)
- Frontend Mentor - [@Flashdaniel](https://www.frontendmentor.io/profile/Flashdaniel)
- Linkdin- [Daniel Nweze](https://www.linkedin.com/in/daniel-nweze-017909214/)
