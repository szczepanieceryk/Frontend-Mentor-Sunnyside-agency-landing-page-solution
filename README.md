# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

Live demo of a layout

- Live Site URL: [Add live site URL here](https://szczepanieceryk.github.io/Frontend-Mentor-Sunnyside-agency-landing-page-solution/)

## My process

### Built with

- HTML 5
- CSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

How to change HTML elements order by just CSS ?
That's one way, how to do it :D.

```html
<div className="header-section">
  <div className="egg-section" id="one">
    <img
      className="egg-image"
      src="{EggImage}"
      alt="egg on a yellow background"
    />
  </div>
  <div className="about-us-section" id="two">
    <h3><strong>Transform your brand</strong></h3>
    <span>
      We are a full-service creative agency specializing in helping brands grow
      fast. Engage your clients through compelling visuals that do most of the
      marketing for you.
    </span>
    <a className="lern-more" href="">lern more</a>
  </div>
</div>
```

```css
.header-section {
  display: flex;
  flex-flow: row;
}
#one {
  order: 2;
}
#two {
  order: 1;
}
```

### Continued development

I would love to cointinue focusing on cool looking layouts and user friendly interfaces, because at the end of a day we want to build solutions for people, to make somebody life easier, right ? 😁.

## Author

- Website - [Eryk Szczepaniec](http://erykszczepaniec.pl/)
- Frontend Mentor - [@szczepanieceryk](https://www.frontendmentor.io/profile/szczepanieceryk)
