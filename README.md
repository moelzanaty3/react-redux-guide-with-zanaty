These notes I suppose it's unique to other react introductions as I will teach you not only React, but the ecosystem around React. When I was learning to React myself, I found myself frustrated that it seemed like every tutorial started on step 14 and left out steps 1-13 of how to set up a React project. with some of my thoughts and other good articles mentioned

___Table of Contents___

- [Intro](#intro)
- [Instructions](#instructions)
- [Who Am I?](#who-am-i)
- [Why I am writing this?](#why-i-am-writing-this)
- [What's is ReactJS?](#whats-is-reactjs)
  - [What's the difference between Library and Framework?](#whats-the-difference-between-library-and-framework)
  - [What's the problems that React solve ?](#whats-the-problems-that-react-solve-)
    - [Composition](#composition)
    - [Declarative Code](#declarative-code)
    - [Unidirectional Data Flow](#unidirectional-data-flow)
    - [Virtual DOM](#virtual-dom)
    - [The Diffing Algorithm](#the-diffing-algorithm)
- [Pure React](#pure-react)
- [NPM](#npm)
  - [MacOS](#macos)
  - [Windows](#windows)
  - [Linux](#linux)
- [Scaffolding Your React App](#scaffolding-your-react-app)
- [Code Quality](#code-quality)
- [NPM/Yarn Scripts](#npmyarn-scripts)
- [JSX](#jsx)
- [Component Composition](#component-composition)
  - [**What's Composition**](#whats-composition)
  - [**What's Props Children**](#whats-props-children)
- [React Dev Tools](#react-dev-tools)
  - [NODE_ENV=development](#node_envdevelopment)
  - [Strict Mode](#strict-mode)
  - [Dev Tools](#dev-tools)
- [State and Lifecycle Methods with React](#state-and-lifecycle-methods-with-react)
  - [State](#state)
  - [The Component Lifecycle](#the-component-lifecycle)
- [Handling User Input](#handling-user-input)
  - [Controlled Components](#controlled-components)
  - [Uncontrolled Component](#uncontrolled-component)
- [Props Types](#props-types)
  - [How React props work](#how-react-props-work)
  - [Why validate props in React?](#why-validate-props-in-react)
  - [Using the `prop-types` library in React](#using-the-prop-types-library-in-react)
- [Presentational and Container Component](#presentational-and-container-component)
- [React Router](#react-router)
  - [What is routing?](#what-is-routing)
  - [Setting up the router](#setting-up-the-router)
  - [Rendering routes](#rendering-routes)
- [Error Boundaries](#error-boundaries)
- [Context](#context)
- [Portals and Refs](#portals-and-refs)
- [Deploy your Code](#deploy-your-code)
- [[Bonus] TailwindCSS](#bonus-tailwindcss)
- [Why Redux?](#why-redux)
- [What is Redux?](#what-is-redux)
- [Pros and Cons of Redux](#pros-and-cons-of-redux)
- [Function Programming](#function-programming)
- [Functions as First-Class Citizens](#functions-as-first-class-citizens)
- [Higher-order Functions](#higher-order-functions)
- [Functional Composition](#functional-composition)
- [Currying](#currying)
- [Pure Functions](#pure-functions)
- [Immutability](#immutability)
- [Updating Objects](#updating-objects)
- [Updating Arrays](#updating-arrays)
- [Redux Data Flow Concepts](#redux-data-flow-concepts)
- [Redux Functions](#redux-functions)
- [Redux React](#redux-react)
- [Middle Ware Redux](#middle-ware-redux)
- [Thunk](#thunk)

## Intro

React is nearly never used by itself so it's useful to know the tools you're using. **I believe you as a developer
should know how your tools works and what purpose they're serving.** Many times have I taught courses similar to this
one to hear people using tools and complaining about them because they don't actually know why they're using them,
just that they're necessary. As such, in this course we show you how to build projects without any using tools at all
and introduce the various tools, one at a time so you understand the actual problem being solved by the tool.
Hopefully given the knowledge of the problem solved by the tool you'll embrace the tools despite their complexities
due to the ease and power they offer you.

## Instructions

- Throughout the course you'll see something like this
  > 💎 `<link to the current state of the code>`.

  This is a point where I have stopped and committed this to a repo. If you fall behind, get stuck, or just want to skip ahead, just use git and check out that commit! You can also go explore the those commits on GitHub too to see what they look like from [here](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/commits/main).

- if you have no idea about how to use git so well, let me recommend to you resources to learn it.
  - **Git** is definitely a tool worth investing time into; while it may seem boring and take a lot of time and energy
    to learn, some day it will save you days if not weeks worth of work.
    - [Getting Git Right](https://www.atlassian.com/git)
    - [Version Control with Git by Udacity](https://www.udacity.com/course/version-control-with-git--ud123)
    - [Git Handbook](https://guides.github.com/introduction/git-handbook/)

## Who Am I?

<img src="https://avatars.githubusercontent.com/u/16934778?s=400&u=687f93e3b54916c911b232b55fd46f31e944beae&v=4" width="250" alt="mohammed elzanaty" align="right"/>

Hey 👋  I am [**Mohammed Elzanaty.**](https://www.linkedin.com/in/mohammedelzanaty129/) a passionate teaching-lover, developer, writer, and autodidact. I'm presently (as of writing) a Senior Software Engineer at [Vodafone International Services](https://www.vodafone.com/) and Nano Degree Frontend Lead at [Udacity](https://www.udacity.com/).

- Developed a wide range of projects for small and large companies, I have enormous amounts of experience working
  on different projects around the world.
- Delivered workshops and talks for web technologies. I have about +1500 hours of teaching because I love teaching, entertaining, and informing. fell free to [Reach me out to see if I can help you with your conference or training](mailto:mohammedelzanaty129@gmail.com)
- Previous to that, I was a senior or staff JavaScript at [Evolvice GmbH](https://www.evolvice.de/en/) and others software companies.
- My biggest passions in life are people and experiences. I hope by going  
  through this course that it can improve your life in some meaningful way and that you in turn can improve someone
  else's life.
- My beautiful wife, and I live in a city called [Sharm Al Shiekh, South Sina](https://www.google.com/maps/place/Sharm+Al+Shiekh,+South+Sinai+Governorate/@27.8887765,34.29756,11.96z/data=!4m13!1m7!3m6!1s0x1453382c1ee3f6fd:0x59cc0e44682197f8!2sSharm+Al+Shiekh,+South+Sinai+Governorate!3b1!8m2!3d27.9333725!4d34.3421397!3m4!1s0x1453382c1ee3f6fd:0x59cc0e44682197f8!8m2!3d27.9333725!4d34.3421397) in Egypt.
- I like travelling, reading and fixing bugs

Please catch up with me on social media, would love to chat: [Twitter](https://twitter.com/mohammdelzanaty) - [LinkedIn](https://www.linkedin.com/in/mohammedelzanaty129/)

## Why I am writing this?

>I love to teach. It's a challenging task that forces you to peel back all the knowledge you've gained so you can approach someone who lacks the same experience and terminology you have. It forces you to take amorphous concepts floating in your brain and crystalize them into solid concepts that you can describe. It forces you to acknowledge your gaps in knowledge because you'll begin to question things you know others will question. For me to ever master a concept, I have to teach it to someone else.

I need also to take the chance and as you if you could take a second to [![star the repo](https://img.shields.io/github/stars/mohammedelzanaty/react-redux-guide-with-zanaty?style=social&label=Star&maxAge=2592000)](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty) and [![Fork It and Play](https://img.shields.io/github/forks/mohammedelzanaty/react-redux-guide-with-zanaty.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/Naereen/StrapDown.js/network/) I'd be super appreciative. It helps me reach more people.

it's been a long time that I want to take a chance to write about one of my fav things in my life which it's react, of
course, react... so let's stop talking about me and talk about react

## What's is ReactJS?

As described

1. [React-js](https://reactjs.org/docs/getting-started.html) documentation it's a JavaScript library for building user
   interfaces.
2. [Wikipedia](<https://en.wikipedia.org/wiki/React_(JavaScript_library)>) React is a JavaScript library for building user
   interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as
   a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data
   that needs to be recorded.

form the above definitions we noticed that React it's javascript library and this make me ask you

### What's the difference between Library and Framework?

Both libraries and frameworks are reusable code written by someone else. Their purpose is to help you solve common problems in easier ways.

We can use a house as a metaphor to explain the difference between these concepts.

1. [Library](https) is like building your home from scratch, you have the choice to make your house as you wish, with any architecture you like, you can sort your rooms in the way you like.
2. [Framework](https) is like buying a new house, you don’t have to deal with building problems, but you can’t choose how to sort your rooms because the house is already built.

![difference between library and framework](https://miro.medium.com/max/640/1*tMJUTqe2dKlueiNU17IZug.png)

> The technical difference between a framework and library lies in a term called inversion of control. When you use a library, you are in charge of the application flow. You choose when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides you with a few places to plug in your code, but it calls the code you plugged in as needed.

☕ ⁉️ 🙋🏻 🙋🏼 [COFFE TIME](https://ahaslides.com/ZANATYCT)

### What's the problems that React solve ?

- UI Complexity **``Solved by``** Declarative Code
- Messy Data Flow **``Solved by``** Unidirectional Data Flow
- Slow DOM Operations **``Solved by``** virtual-dom-diffing
- Repetitive Code **``Solved by``** Reusable components

so after we know simple definitions about react and know the problems let's dive into solutions

![https://xbsoftware.com/blog/why-react-awesome-app-dev/](https://xbsoftware.com/wp-content/uploads/2016/04/why-react-awesome.jpg)

#### Composition

In programming... The composition is about creating small functions and creating bigger and more complete functions with them. Think of a function as a brick, composition is how you would make those bricks work together to build a wall or a house.

Let's think of composition with another way In mathematics, [Function Composition](https://en.wikipedia.org/wiki/Function_composition) is an operation that takes two functions `f` and g and produces a function h such that `h(x) = g(f(x))` In this operation, the function `g` is applied to the result of applying the function _f_ to _x_. That is, the functions `f : X → Y and g : Y → Z` are **composed** to yield a function that maps `x in X to g(f(x)) in Z`.

You might have encoutered composition in mathematics, written like so: f(g(x)). The function f is composed with the function g of x. Or f after g equals f of g of x. After because we evaluate the functions from right to left, from the inside to the outside:

f <-- g <-- x

The output of the precedent function becomes the input of the next. x is the input of g. The output of g(x) becomes the f input.

I see that things might go to be more complicated so now let's take an example,
using [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to create a
new array from an initial set of data, and then filtering the result
using [filter()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) as a **
NOTE:** _map, filter think of them as a factory or containers that given an initial list (array of things), transform
it into something else, while keeping that same original list intact. :_

```jsx
const people = ['Mohammed', 'Yasmeen', 'Elzanaty', 'Hamza', 'Saad'];
people.map(name => name[0]).filter(char => char === 'M'); //'M'
```

#### [Declarative Code](https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js)

It's an easy and better approach for me, bcoz you let the computer do all that you need for you, you just want to
express the logic of a computation without describing its control flow we don't code up all of the steps to get us to
the end result. Instead, we declare what we want to be done, and code will take care of doing it.

```jsx
const people = ['Mohammed', 'Yasmeen', 'Elzanaty', 'Hamza', 'Saad'];
const excitedPeople = people.map(name => name + '!');
// ["Mohammed!", "Yasmeen!", "Elzanaty!", "Hamza!", "Saad!"]
```

[Imperative Code](https://tylermcginnis.com/imperative-vs-declarative-programming/)

we tell code exactly what to do and how to do it.

```jsx
const people = ['Mohammed', 'Yasmeen', 'Elzanaty', 'Hamza', 'Saad'];
const excitedPeople = [];
for (let i = 0; i < people.length; i++) {
  excitedPeople[i] = people[i] + '!';
}
// ["Mohammed!", "Yasmeen!", "Elzanaty!", "Hamza!", "Saad!"]
```

> **Imperative code,** instructs code for how to perform each step.
> **Declarative code**, instructs code for what we want to be done, and let code take care of performing the steps.

#### [Unidirectional Data Flow](https://flaviocopes.com/react-unidirectional-data-flow/)

In general, this concept means that data has one, and only one, way to be transferred to other parts of the application.

In React this means that:

- state is passed to the view and to child components
- actions are triggered by the view
- actions can update the state
- the state change is passed to the view and to child components

![view-actions-state](https://flaviocopes.com/react-unidirectional-data-flow/view-actions-state.png)

The view is a result of the application state. State can only change when actions happen. When actions happen, the state is updated.

Thanks to one-way bindings, data cannot flow in the opposite way (as would happen with two-way bindings, for example), and this has some key advantages:

it’s less error prone, as you have more control over your data
it’s easier to debug, as you know what is coming from where
it’s more efficient, as the library already knows what the boundaries are of each part of the system
A state is always owned by one Component. Any data that’s affected by this state can only affect Components below it: its children.

Changing state on a Component will never affect its parent, or its siblings, or any other Component in the application: just its children.

This is the reason that the state is often moved up in the Component tree, so that it can be shared between components that need to access it.

#### [Virtual DOM](https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)

First of all — the _Virtual DOM_ was not invented by React, but React uses it and provides it for free.

The _Virtual DOM_ is an abstraction of the HTML DOM. It is lightweight and detached from the browser-specific
implementation details. Since the DOM itself was already an abstraction, the virtual DOM is, in fact, an abstraction of
an abstraction.

The [Virtual DOM](https://dev.to/koolkishan/what-is-virtual-dom-how-virtual-dom-works-what-is-reconciliation-what-is-diffing-algorithm-what-makes-react-so-fast-327a) reflects a tree in which each node is an HTML element. React is able to traverse and carry out
operations on this Virtual DOM, saving our app from having "costly" activity on the actual DOM.

In simple words, virtual DOM is just a copy of the original DOM kept in the memory and synced with the real DOM by libraries such as ReactDOM. This process is called Reconciliation.

Virtual DOM has the same properties that of the Real DOM, but it lacks the power to directly change the content of the screen.

Think of Virtual DOM as the blueprint of a machine, changes made to the blueprint doesn't reflects on the machine itself.

So when there is a update in the virtual DOM, react compares the virtual DOM with a snapshot of the virtual DOM taken right before the update of the virtual DOM.

With the help of this comparison React figures out which components in the UI needs to be updated. This process is called diffing. The algorithm that is used for the diffing process is called as the diffing algorithm.

Once React knows which components has been updated, then it replaces the original DOM nodes with the updated DOM node.

![React Virtual DOM Explained in Simple English - Programming with Mosh](https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?fit=1173%2C785&ssl=1)

#### [The Diffing Algorithm](https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm)

Diffing determines how to make efficient changes to the DOM. With diffing, old DOM nodes are taken out and replaced only
when necessary. This way, our app doesn't perform any unnecessary operations to figure out when to render content.

## Pure React

Let's start by writing pure React. No compile step. No JSX. No Babel. No Webpack or Create-React-App. **Just pure
Vanilla JavaScript**.

Let's start your project. Create your project directory. I'm going to call mine `mz-shop` since we're going to be
building a shop app throughout this course.

1. Create a file and name it `index.html`
2. put it into a `src/` directory inside your project folder.

In `index.html` put:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.css" />
    <title>MZ-Shop</title>
  </head>

  <body>
    <div id="root">not rendered</div>
    <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"></script>
    <script>
      // Your code is going to go here
    </script>
  </body>
</html>
```

> What's new between React 16 and React 17? Nothing! No new features were added. It was a "stepping stone" version that allows sites to upgrade React versions gradually. Previously only one copy of React could run on a page at a time and with v17 more than one can. [See more here](https://reactjs.org/blog/2020/10/20/react-v17.html).

Now open this file in your browser. On Mac, hit ⌘ (command) + O in your favorite browser, and on Windows and Linux hit
CTRL + O to open the Open prompt. Navigate to wherever you saved the file and open it. You should see a line of text
saying "not rendered".

- Pretty standard HTML5 document. If this is confusing, here's a free course from **Udacity**
  about [HTML and CSS](https://www.udacity.com/course/intro-to-html-and-css--ud001) that can help you out.
- We're adding a root div. We'll render our React app here in a sec. It doesn't _have_ to be called root, **_just a common
  practice._**
- We have two script tags.

- The first is the **React library.** This library is the interface of how to interact with React; all the methods (except
  one) will be via this library. It contains no way of rendering itself though; it's just the API.
- The second library is **the rendering layer**. Since we're rendering to the browser, we're using React DOM. There are
  other React libraries like React Native, React 360 (formerly React VR), A-Frame React, React Blessed, and others. You
  need both script tags. The order is not important.
- The last script tag is where we're going to put our code. You don't typically do this but I wanted to start as simple
  as possible. This script tag must come _after_ the other two.

> Let's add some style! [Click here](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/blob/main/mz-shop/src/assets/styles/App.css) to get the stylesheet for this course. If you follow along with the course and use the same class names, the styles will be applied for you automatically. This isn't a course on CSS so I make no assertion it's any good!

**In the last script tag, put the following.**

```javascript
const App = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, 'MZ Shop'));
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
```

This is about the simplest React app you can build.

- The first thing we do is make our own component, App. React is all about making components. And then taking those
  components and making more components out of those.
- There are **two types of components**, function components and class components. This is a function component. We'll see
  class components shortly.
- A function component _must_ return markup (which is what `React.createElement` generates.)
- These component render functions _have_ to be fast. This function is going to be called a lot. It's a hot code path.
- Inside of the render function, you cannot modify any sort of state. Put in functional terms, this function must be
  pure. You don't know how or when the function will be called so it can't modify any ambient state.
- `React.createElement` creates one _instance_ of some component. If you pass it a _string_, it will create a DOM tag
  with that as the string. We used `h1` and `div`, those tags are output to the DOM. If we put `x-some-custom-element`,
  it'll output that (so web components are possible too.)
- The second empty object (you can put `null` too) is attributes we're passing to the tag or component. Whatever we put
  in this will be output to the element (like id or style.)
- `ReactDOM.render` is what takes our rendered `App` component and puts in the DOM (in our case we're putting it in
  the `root` element.)
- Notice we're using `React.createElement` with `App` as a parameter to `ReactDOM.render`. We need an _instance_
  of `App` to render out. `App` is a class of components and we need to render one instance of a class. That's
  what `React.createElement` does: it makes an instance of a class.

- Without React Decoration
      Now that we've done that, let's separate this out from a script tag on the DOM to its own script file (best practice.)
  1. Make a new file in your `src` directory called `App.js` and cut and paste your code into it.
  2. Add `<script src="App.js"></script>` before end of the body at `index.html` to link js file

Modify your code, so it looks like:

```javascript
const Product = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Mens Cotton Jacket'),
    React.createElement(
      'h2',
      {},
      'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions,'
    ),
    React.createElement('h2', {}, '55.99$'),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'MZ Shop'),
    React.createElement(Product),
    React.createElement(Product),
    React.createElement(Product),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
```

> 🚨 You will be seeing a console warning `Warning: Each child in a list should have a unique "key" prop.` in your browser console. React's dev warnings are trying to help your code run faster. Basically React tries to keep track of components are swapped in order in a list and it does that by you giving it a unique key it can track. If it sees two things have swapped, it'll just move the components instead of re-rendering.

- To make an element have multiple children, just pass it an array of elements.
- We created a second new component, the `Product` component. This component represents one product. When you have
  distinct ideas represented as markup, that's a good idea to separate that it into a component like we did here.
- Since we have a new `Product` component, we can use it multiple times! We just use multiple calls
  to `React.createElement`
  .
- In `createElement`, the last two parameters are optional. Since Product has no props or children (it could, we just
  didn't make it use them yet) we can just leave them off.

Okay, so we can have multiple product, but it's not a useful component yet as the product contain a lot of properties
like title, price, description and image etc. Let's make it a bit more complicated.

```javascript
const Product = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.title),
    React.createElement('h2', {}, props.description),
    React.createElement('h2', {}, props.price),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'MZ Shop'),
    React.createElement(Product, {
      title: 'Samsung SE450',
      description:
        '21.5-inch desktop business monitor offers superior ergonomics and eco-friendly features – constructed with 30%',
      price: '89.99$',
    }),
    React.createElement(Product, {
      title: 'Mac Book Pro',
      description:
        'our perfect pack for everyday use and walks in the forest. 15 inches) in the padded sleeve, your everyday',
      price: '700$',
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
```

Now we have a more flexible component that accepts props from its parent. Props are variables that a parent (App) passes
to its children (the instances of Product.) Now each one can be different! Now that is far more useful than it was since
this Product component can represent not just Mens Cotton Jacket, but any Product. This is the power of React! We can make multiple, re-usable
components. We can then use these components to build larger components, which in turn make up yet-larger components.
This is how React apps are made!

## NPM

npm does not stand for Node Package Manager. It is, however, the package manager for Node. (They don't say what it
stands for.) It also has all the packages in the front end scene. npm makes a command line tool, called `npm` as
well. `npm` allows you to bring in code from the npm registry which is a bunch of open source modules that people have
written, so you can use them in your project. Whenever you run `npm install react` (don't do this yet), it will install
the latest version of React from the registry.

In order to start an npm project, run `npm init` at the root of your project. If you don't have Node.js installed,
please go install that too. When you run `npm init` it'll ask you a bunch of questions, or you can me it is easier by `npm init -y`.
If you don't know the answer or don't care, just hit enter. You can always modify package.json later.
This will allow us to get started installing and saving packages.

- Kick off with create-react-app
      💡 Before Installing `create-react-app` 💡

If you already have Node.js on your machine, it's a good idea to reinstall it to make sure you have the latest version.
Keep in mind that Node.js now comes with `npm` by default.

### MacOS

1. Install [Homebrew](https://brew.sh/) by
   running `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` in the
   terminal.
2. Check that it was installed by running `brew --version`. You should see the version number that was installed.
3. Run `brew install node`.
4. Run `node --version`.
5. Check that `npm` was installed as well by running `npm --version`.
6. Run `brew install yarn`.
7. Run `npm --version`.
8. Run `yarn install && yarn --version`

### Windows

1. Please download the [Node.js Installer](https://nodejs.org/en/download/), go through the installation process, and
   restart your computer once you're done.
2. Please follow the [`yarn` installation instructions](https://yarnpkg.com/lang/en/docs/install).
3. Run `yarn --version` to make sure `yarn` has been successfully installed.

### Linux

1. Please follow [these instructions](https://www.ostechnix.com/install-node-js-linux) to
   install [Node.js](https://nodejs.org/en/download/).
2. Run `sudo apt-get install -y build-essential`.
3. Please follow the [`yarn` installation instructions](https://yarnpkg.com/lang/en/docs/install).
4. Run `yarn --version` to make sure `yarn` has been successfully installed.

## Scaffolding Your React App

JSX is awesome, but it does need to be transpiled into regular JavaScript before reaching the browser. We typically use
a transpire like [Babel](https://github.com/babel/babel) to accomplish this for us. We can run Babel through a build
tool, like [Webpack](https://github.com/webpack/webpack) which helps bundle all of our assets (JavaScript files, CSS,
images, etc.) for web projects.

To streamline these initial configurations, we will use Facebook's Create React App package to manage all the setup for
us! This tool is incredibly helpful to get started in building a React app, as it sets up everything we need with _zero
configuration_! Install Create React App (through the command-line with [npm](https://www.npmjs.com/get-npm)), and then
we can walk through what makes it so great.

> npm install -g create-react-app

If you're seeing errors when trying to install a package globally, feel free to check
out [this article](https://docs.npmjs.com/getting-started/fixing-npm-permissions) in the npm documentation. Note that to
find out where global packages are installed, you can run `npm list -g` in your console (more
information [here](https://stackoverflow.com/questions/5926672/where-does-npm-install-packages)).

**Let's also Set up the API file we will use in the project we will build to make more focus on react** I will use a fake api that return products to give us the ability to play with it. you can [take a look](https://fakestoreapi.com/docs) at it for more information
so now we need 4 important function to use

1. Get Products
2. Get Product by ID
3. Delete Product
4. Search in Products by Query

so now create a folder in your `src` folder and name it `api` then create a new file called `ProductAPI.js` ad past this code on it.

```js
const BASE_URL = 'https://fakestoreapi.com';

/**
 * Get Product by Id
 * @param productId
 * @returns {Promise<any>}
 */
export const getProductById = productId =>
  fetch(`${BASE_URL}/products/${productId}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.log(error);
    });

/**
 * Delete Product
 * @param productId
 * @returns {Promise<any>}
 */
export const deleteProduct = productId =>
  fetch(`${BASE_URL}/products/${productId}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.log(error);
    });
/**
 * Get All Products
 * @returns {Promise<any>}
 */
export const getAllProduct = () =>
  fetch(`${BASE_URL}/products`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.log(error);
    });

/**
 * Search in products list
 * @param query
 * @returns {Promise<*>}
 */
export const searchProduct = async query => {
  const products = await getAllProduct();
  return products.filter(
    product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
};
```

## Code Quality

It's important to keep quality high when writing code. Or at least that's how I sell ESLint and Prettier to my
co-workers. In reality, I'm super lazy and want the machine to do as much work as possible so I can focus more on
architecture and problem-solving and less on syntax and style. While there are many tools that can help you keep code
quality high, these two I consider core to my workflow.

[Prettier](https://github.com/prettier/prettier) is an amazing tool from the brain
of [James Long](https://twitter.com/jlongster). James, like many of us, was sick of having to constantly worry about the
style of his code: where to stick indents, how many, when to break lines, etc etc. Coming from languages like Go,
Reason, or Elm where all that is just taken care of by the tooling for the language, this quickly wears. James did
something about it and made a tool to take care of it: Prettier.

Prettier is a really fancy pretty printer. It takes the code you write, breaks it down in to an abstract syntax tree (
AST) which is just a representation of your code. It then takes that AST, throws away all of your code style you made
and prints it back out using a predefined style. While this sounds a little scary, it's actually really cool. Since you
no longer have control of the style of your code, you no longer have to think about it at all. Your code is always
consistent, as is the code from the rest of your team. No more bikeshedding!! As I like to put it: if your brain is a
processor, you get to free up the thread of your brain that worries about code styles and readability: it just happens
for you. Don't like semicolons? Don't write them! It puts them in for you. I _love_ Prettier.

Need to tool around a bit with it before you trust it? [Go here](https://prettier.io/playground/). You can see how it
works.

Let's go integrate this into our project. It's _pretty_ easy (lol.)

Either install Prettier globally `npm install --global prettier` or replace when I run `prettier` with (from the root of
your project) `npx prettier`. From there, run `prettier script.js`. This will output the formatted version of your file.
If you want to actually write the file, run `prettier --write script.js`. Go check script.js and see it has been
reformatted a bit. I will say for non-JSX React, prettier makes your code less readable. Luckily Prettier supports JSX!
We'll get to that shortly.

Prettier has a few configurations but it's mostly meant to be a tool everyone uses and doesn't argue/bikeshed about the
various code style rules. [Here they are](https://prettier.io/docs/en/options.html). I just use it as is since I'm lazy.
Prettier can also understand [flow](https://flow.org/) and [TypeScript](https://www.typescriptlang.org/).

Prettier is great to use with [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=reactintro-github-brholt).
Just
download [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode&WT.mc_id=reactintro-github-brholt)
. Pro tip: set it to only run Prettier when it detects a Prettier config file. Makes it so you never have to turn it
off. In order to do that, set `prettier.requireConfig` to `true` and `editor.formatOnSave` to true.

So that our tool can know this is a Prettier project, we're going to create a file called `.prettierrc` and put

```json
{}
```

in it. This lets everyone know this is a Prettier project that uses the default configuration. You can put other configs
here if you hold strong formatting opinions. **for example here's mine**

```json
{
  "singleQuote": true,
  "printWidth": 100,
  "proseWrap": "always",
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "semi": false
}
```

## NPM/Yarn Scripts

So it can be painful to try to remember the various CLI commands to run on your project. You can put CLI commands into
it and then run the name of the tag and it'll run that script. Let's go see how that works. Put the following into your
package.json.

First run `npm install -D prettier`. `-D` means it's for development only.

```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx}\""
  }
}
```

Now you can run `yarn format` or `npm run format` and it will run that command. This means we don't have to remember
that mess of a command and just have to remember format. Nice, right? We'll be leaning on this a lot during this course.

**Alternatives**

There really aren't any for Prettier. The alternative is just not to use a formatter. ESLint's `--fix` flag would be the
closest thing.

## JSX

So far we've been writing React without JSX, something that I don't know anyone that actually does with their apps. _
Everyone_ uses JSX. I show you this way so what JSX is actually doing is demystified to you. It doesn't do hardly
anything. It just makes your code a bit more readable.

If I write `React.createElement("h1", { id: "main-title" }, "My Website");`, what am I actually trying to have rendered
out? `<h1 id="main-title">My Website</h1>`, right? What JSX tries to do is to shortcut this translation layer in your
brain, so you can just write what you mean. Let's convert `Product.js` to using JSX. It will look like this:

```jsx
import React from 'react';

const Product = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.price}</h2>
    </div>
  );
};

export default Product;
```

I don't know about you, but I find this far more readable. And if it feels uncomfortable to you to introduce HTML into
your JavaScript, I invite you to give it a shot until the end of the workshop. By then it should feel a bit more
comfortable. And you can always go back to the old way.

However, now you know _what_ JSX is doing for you. It's just translating those HTML tags into `React.createElement`
calls. _That's it._ Really. No more magic here. JSX does nothing else. Many people who learn React don't learn this.

Notice the strange `{props.title}` syntax: this is how you output JavaScript expressions in JSX. An expression is
anything that can be the right side of an assignment operator in JavaScript,
e.g. `const x = <anything that can go here>`. If you take away the `{}` it will literally output `props.title` to the
DOM.

Notice you still have to import React despite React not being explicitly used. Remember that JSX is compiled
to `React.createElement` calls. Anywhere you use JSX, you need to import React.

So now JSX is demystified a bit, let's go convert App.js.

```jsx
import React, { Component } from 'react';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div>
        <h1>MZ Shop!</h1>
        <Product
          title='Samsung SE450'
          description='desktop business monitor offers superior ergonomics'
          price='89.99$'
        />
        <Product
          title='Mac Book Pro'
          description='Stash your laptop (up to 15 inches) in the padded sleeve,'
          price='700$'
        />
      </div>
    );
  }
}

export default App;
```

Notice we have Product as a component. Notice that the `P` in `Product` is capitalized. It _must_ be. If you make it lowercase,
it will try to have `product` as a web component and not a React component.

We now pass props down as we add attributes to an HTML tag. Pretty cool.

☕ ⁉️ 🙋🏻 🙋🏼 [COFFEE TIME](https://ahaslides.com/ZANATYCT)

💎 [3a5a7260aebd28234cac5f63fa27ab3ef5a9f3ca](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/tree/3a5a7260aebd28234cac5f63fa27ab3ef5a9f3ca).

## Component Composition

I remember the first project I made in react and the way of thinking through building the component, just need to create
too many components, but I found at the end of the day that this lead to deeply nested structures which made it a pain
to pass props all the way down. so now react provide a solution for this
by [Composition](https://reactjs.org/docs/composition-vs-inheritance.html) and this lead us to

### **What's Composition**

In React, composition is a natural pattern of the component model. It's how we build components from other components,
of varying complexity and specialization through props. Depending on how generalized these components are, they can be
used in building many other components.

**Reducing Component Nesting With Composition** for example here in our application the `Product` component. each product will have various information about the product including title, price, image and description etc...

```jsx
// Product Info Component
const ProductInfo = ({ id, title, description, price, category }) => {
  return (
    <div className='product-details'>
        <h3 className='product-title'>{title}</h3>
      <ProductPriceCategory price={price} category={category} />
      <p className='product-description'>{description}</p>
    </div>
  );
};

// ProductCategory And PriceComponent
const ProductPriceCategory = ({ price, category }) => {
  return (
    <div className='product-meta'>
      <h4 className='product__price'>{price}</h4>
      <p className='product__category'>{category}</p>
    </div>
  );
};
```

so we can do this better here to reduce the nested structure by using `props.children` and by handling specialization
through props.

```jsx
// Product.js
import React from 'react';

// Product Card Component
const Product = props => {
  return (
    <div className='product'>
      {props.product.image && (
        <img
          src={props.product.image}
          className='product-avatar'
          alt={`product of ${props.product.title}`}
        />
      )}
      {props.children}
      <div
        className='product-remove'
        onClick={() => {
          props.onDeleteProduct(props.product.id);
        }}
      >
        remove
      </div>
    </div>
  );
};

export default Product;
```

so now before we continue I have a question

### **[What's Props Children](https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891)**

The React docs say that you can use `props.children` on components that represent `generic boxes`
and that ‘don’t know their children ahead of time’. For me, that did not really clear things up. I’m sure for some, that
definition makes perfect sense, but it did not for me. My simple explanation of what `this.props.children` does is that

> it is used to display whatever you include between the opening and closing tags when invoking a component.

A simple example Here’s an example of a stateless function that is used to create a component. Again, since this is a
stateless function, there is no 'this' keyword so just use `props.children`

```jsx
const Product = props => {
  return (
    <div>
      <h1>Zanaty</h1>
      {props.children}
    </div>
  );
};
```

This component contains an `<h1>` that is receiving some props, and then it is displaying {props.children}. Whenever
this component is invoked`{props.children}` will also be displayed and this is just a reference to what is between the
opening and closing tags of the component.

so let's back to our code and create a product card in `Product.js`

```jsx
import React from 'react';

const Product = ({ title, image, description, price, category }) => {
  return (
    <div className='product'>
      {image && <img src={image} className='product-avatar' alt={`product of ${title}`} />}
      <div className='product-details'>
        <h3 className='product-title'>{title}</h3>
        <div className='product-meta'>
          <p className='product-price'>{price}</p>
          <p className='product-category'>{category}</p>
        </div>
        <p className='product-description'>{description}</p>
      </div>
      <div className='product-remove'>remove</div>
    </div>
  );
};

export default Product;
```

but now as we add more props to our code we need to edit the `Product` component at `App.js` like

```jsx
import React, { Component } from 'react';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div>
        <div className='product-list'>
          <Product
            title='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
            description='Your perfect pack for everyday use and walks in the forest. '
            price='89.99$'
            category='men clothing'
            image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
          />

          <Product
            title='Mens Casual Premium Slim Fit T-Shirts'
            description='Slim-fitting style, contrast raglan long sleeve, three-button henley placket,'
            price='89.99$'
            category='men clothing'
            image='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
          />
        </div>
      </div>
    );
  }
}

export default App;
```

What are some benefits of this change? We now have code (the Card component) that is more reusable as a result of it
being generalized. We create the specialized cards `ProductCard` by passing props through Card. We made our overall code
cleaner by unifying individual components that are not reusable, resulting in a simpler structure that doesn't require
passing props down through many components.

In general I find two reasons to break a component into smaller components: reusability and organization. When you want
to use the same component in multiple places (e.g. a button, a tool tip, etc.) then it's helpful to have one component
to maintain, test, use, etc.

Other times it can be useful to break concepts down into smaller concepts to make a component read better. For example,
if we put all the logic for this entire page into one component, it would become pretty hard to read and manage. By
breaking it down we can make each component easier to understand when you read it and thus maintain.

Looks much better! The links don't go anywhere yet but we'll get there. We don't have a good loading experience yet
though. Right now we just seem unresponsive. Using a new tool to React called Suspense we can make the DOM rendering
wait until we finish loading our data, show a loader, and then once it finishes we can resume rendering it. This is
coming soon; for now you would just keep track of a loading Boolean and then conditionally show your component or a
loading spinner based on whether it was finished loading or not.

It's important to note that this is just a demonstration of a concept and by no means the 'right' way. Depending on your
needs, you may compose your components differently.

> I hear you enough working with static data and let's make stuff more dynamically from the backend
> 📝 NOTE in the commited code you will find CSS I add to make thing looks nicer

💎 [6e1a7c36dec7eb028b8c46efe790c93f6f7ae9d9](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/tree/6e1a7c36dec7eb028b8c46efe790c93f6f7ae9d9).

## React Dev Tools

React has some really great tools to enhance your developer experience. We'll go over a few of them here.

### NODE_ENV=development

React already has a lot of developer conveniences built into it out of the box. What's better is that they automatically strip it out when you compile your code for production.

So how do you get the debugging conveniences then? Well, if you're using Parcel.js, it will compile your development server with an environment variable of `NODE_ENV=development` and then when you run `parcel build <entry point>` it will automatically change that to `NODE_ENV=production` which is how all the extra weight gets stripped out.

Why is it important that we strip the debug stuff out? The dev bundle of React is quite a bit bigger and quite a bit slower than the production build. Make sure you're compiling with the correct environmental variables or your users will suffer.

### Strict Mode

React has a new strict mode. If you wrap your app in `<React.StrictMode></React.StrictMode>` it will give you additional warnings about things you shouldn't be doing. I'm not teaching you anything that would trip warnings from `React.StrictMode` but it's good to keep your team in line and not using legacy features or things that will be soon be deprecated.

Go to `App.js` and wrap `<App />` in the render call in `<StrictMode>`.

```jsx
// import at top
import { StrictMode } from 'react';

// replace render
render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
```

### Dev Tools

React has wonderful dev tools that the core team maintains. They're available for both Chromium-based browsers and Firefox. They let you do several things like explore your React app like a DOM tree, modify state and props on the fly to test things out, tease out performance problems, and programtically manipulate components. Definitely worth downloading now.

## State and Lifecycle Methods with React

Before dig deeper and dive for getting data from the api let's clear some important concepts and make sure we understand
it well one of these important concepts is `state` so what's the state

### State

As [ReactDoc](https://reactjs.org/docs/faq-state.html)

- plain JavaScript object
- managed within the component (similar to variables declared within a function).
- can only be used in Class Components
- can be updated only by a `setState` function which schedules an update to a component’s state object. When state changes, the component responds by re-rendering.

so it define the state in the class component it defined as property of the
component class for example:-

```jsx
class App extends Component {
  // ...
  state = {};
  // ...
}
```

and can be updated with `setState` by passing an object or a function in setState?

Passing an update function allows you to access the current state value inside the updater. Since setState calls are batched, this lets you chain updates and ensure they build on top of each other instead of conflicting:

```jsx
// this give you access to the previous state
this.setState((prevState) => ({ ... }))
OR
this.setState({ ... })
```

> 📝 props get passed to the component (similar to function parameters) and it's immutable i.e. once set the props cannot be changed,

**Should this Component have state?**

state is `optional`. Since state `increases complexity and reduces predictability`, a Component without state is preferable. Even though you clearly can't do without state in an interactive app, you should avoid having too many Stateful Components.

[Component types](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md#component-types)

1. **Stateless Component** — Only props, no state. There's not much going on besides the render() function and all their logic revolves around the props they receive. This makes them very easy to follow (and test for that matter). We sometimes call these dumb-as-f*ck Components (which turns out to be the only way to misuse the F-word in the English language).
2. **Stateful Component** — Both props and state. We also call these state managers. They are in charge of client-server communication (XHR, web sockets, etc.), processing data and responding to user events. These sort of logistics should be encapsulated in a moderate number of Stateful Components, while all visualization and formatting logic should move downstream into as many Stateless Components as possible.

so for now we need to statue our products in the app and initialize it with empty array for now

```jsx
class App extends Component {
  state = {
    products: [],
  };

  render() {
    // ...
  }
}
```

the next step will be get the data from the `API` and this will lead us to other important concept

☕ ⁉️ 🙋🏻 🙋🏼 [COFFEE TIME](https://ahaslides.com/ZANATYCT)

### The Component Lifecycle

As [ReactDoc](https://reactjs.org/docs/react-component.html)

- Each component has several “lifecycle methods” that you can override to run code at particular times in the process.
- You can use [this lifecycle diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) as a cheat sheet. In
the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.

![Component Life Cycles](./images/reactjs-component-life-cycle.png)

so there're three phases:

1. `Mounting`: **Adding** nodes to the DOM
2. `Updating`: **Altering** existing nodes in the DOM
3. `Un Mounting`: **Removing** nodes from the DOM

every component goes through and to put it in simple terms, you can think of the React component lifecycle as the “lifetime” of a component. **Lifecycle methods are series of events that happen throughout the birth, growth, and death of a React component.**

let's think a little here what we need to achieve in simple words `get products and parse it to the DOM` so logically we
are in the mounting phase there's a lot of stuff happen here but for now let focus on `componentDidMount` which invoked
immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go
here. [see more](https://reactjs.org/docs/react-component.html#componentdidmount)

> If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

to apply this at our code

```jsx
import React, { Component } from 'react';
import { getAllProduct } from './api/ProductAPI';

class App extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    // get products
    getAllProduct().then(products => {
      if (Array.isArray(products)) {
        this.setState({ products });
      }
    });
  }

  render() {
    return (
      <div>
        <div className='product-list'>
          <pre>
            <code>{JSON.stringify(this.state, null, 2)}</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default App;
```

- Whenever a class gets created (React or not), the constructor gets called. If you don't create a constructor, there's a default one that silently gets run in the background. Inside we accept the props from whatever parent created it and then call `super(props)` since we need to take those props and hand them to React.

- We initiate state here. We are going to be keeping an array of products data that we load from the API. We'll
  initialize that as an empty array so we never have to check if that array exists or not.

- We're calling `getAllProduct` method. This lets us get all available products.

- Now, after the response comes back from the API, we call a method called `setState`. `setState` takes in an object and
  does a shallow merge with your current state.

- Now we take that API data and output that to the DOM. Notice React is smart enough to re-render itself after a
  setState is called. pre and code are two tags that allow you to output that code pre-formatted.

Let's make the app use the Product Component we made

```jsx
import React, { Component } from 'react';
import { getAllProduct } from './api/ProductAPI';
import Product from './Product';

class App extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    // get products
    getAllProduct().then(products => {
      if (Array.isArray(products)) {
        this.setState({ products });
      }
    });
  }

  render() {
    return (
      <div>
        <div className='product-list'>
          {this.state.products &&
            this.state.products.map(product => (
              <Product
                title={product.title}
                image={product.image}
                price={product.price}
                category={product.category}
                description={product.description}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
```

📝 We use `map` which takes a JavaScript array, takes a function, applies that function to each array item (i.e. if you have an array of length 15, that function gets called 15 times,) and returns a new array containing the results of each of those function called. In

```javascript

const x = [1,2,3].map(num => num * 2); // [2,4,6]

```

In this case, we have an array of numbers, and we transform those into other thing.

if you open your console now you will find **`Warning: Each child in a list should have a unique "key" prop.`** because Key is a unique identifier that we give React, so it can do quick comparisons on objects. If we decide to change how we sort the list of products.

**Ex.** we sort by title instead of price, we'd re-arrange all the object but they'd be the same object. All React knows is it got a new list. Without any further hinting, React would just destroy all the DOM objects and start over. If we give it a unique key for each object, it can track that an object just moved positions and didn't actually get destroyed and just move the DOM object instead of re-rendering. Big performance win.
so to achieve this and remove warning so the map will

```jsx
this.state.products.map(product => (
  <Product
    key={product.id} /* this line added */
    title={product.title}
    image={product.image}
    price={product.price}
    category={product.category}
    description={product.description}
  />
));
```

💎 [39c564868e4c0e2fc1dc5c609b7481e94c72a9ea](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/commit/39c564868e4c0e2fc1dc5c609b7481e94c72a9ea).

## Handling User Input

HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”. ➡ Read More @ [ReactDoc](https://reactjs.org/docs/forms.html)

### Controlled Components

A [**Controlled Component**](https://reactjs.org/docs/forms.html#controlled-components) is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

**For example,** , we can write the form that give user ability to search in the products as a controlled component:

```jsx
import React, { Component } from 'react'

class App extends Component {
  // 1 -> declare the state 
  // With a controlled component, the input’s value is always driven by the React state. 
  // While this means you have to type a bit more code, 
  // you can now pass the value to other UI elements too, or reset it from other event handlers.
  state = {
    query: ''
  }

  handleSearchProduct = query => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  render() {
    const { query } = this.state
    return (
      <div className="list-products">
        <div className="list-products-top">
          <input
            className="search-products"
            type="text"
            placeholder="Search Products"
            // Since the value attribute is set on our form element, the displayed value will always be this.state.query,
            value={query}
            // on change event that take care of any changes happen in the input
            // making the React state the source of truth. 
            // Since handleChange runs on every keystroke to update the React state, 
            // the displayed value will update as the user types.
            onChange={event => {
              this.handleSearchProduct(event.target.value)
            }}
          />
        </div>

        // ...
      </div>
    )
  }
}

export default App
```

### Uncontrolled Component

A [**Uncontrolled Component**](https://reactjs.org/docs/uncontrolled-components.html) is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

> To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

**For example,** this code accepts a single name in an uncontrolled component:

```jsx
import React, { Component, createRef } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }

  handleSearchProduct = event => {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    const { query } = this.state
    return (
      <div className="list-products">
        <div className="list-products-top">
          <input
            className="search-products"
            type="text"
            placeholder="Search Products"
            ref={this.input}
          />
        </div>

        // ...
      </div>
    )
  }
}

export default App
```

[Conclusion](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/#conclusion) 

Both the controlled and uncontrolled form fields have their merit. **Evaluate your specific situation and pick the approach** — what works for you is good enough.

| Feature                                   | uncontrolled | controlled |
| :---------------------------------------- | :----------: | :--------: |
| one-time value retrieval (e.g. on submit) |      ✅       |     ✅      |
| validating on submit                      |      ✅       |     ✅      |
| instant field validation                  |      ❌       |     ✅      |
| conditionally disabling submit button     |      ❌       |     ✅      |
| enforcing input format                    |      ❌       |     ✅      |
| several inputs for one piece of data      |      ❌       |     ✅      |
| dynamic inputs                            |      ❌       |     ✅      |

If your form is incredibly simple in terms of UI feedback, uncontrolled with refs is entirely fine. You don’t have to listen to what the various articles are saying is “bad.”

> Also, this is not an once-and-for-all decision: you can always migrate to controlled inputs. [Going from uncontrolled to controlled inputs is not hard.](https://goshakkk.name/turn-uncontrolled-into-controlled/)

> I am not going into all the ways of handling user interactions in JavaScript. You can register handlers for things mouse leave, mouse enter, key up, key down, and can even handle stuff like copy and paste events, focus, blur, etc. [Here's a list of them from the React docs](https://reactjs.org/docs/events.html#supported-events).

💎 [02045ab8b4c6fa78f3dd105a375b5f4934bde8c8](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/commit/02045ab8b4c6fa78f3dd105a375b5f4934bde8c8).

## Props Types

I spent a lot of time to ask myself why I use this? and to not hide a secret from you, it was a heavy burden on my shoulders but in simple words this little package will save you from a lot shitty stuff with just multiple lines of code and the most important thing is that **it will save you from yourself**

**prop-types** is a runtime checking for react props and similar objects.

### How React props work

React props allow you to send data — including numbers, strings, functions, objects, arrays, etc. — to a component when you call on that component. If you have multiple components, you can pass data from one component to another.

To pass props between components, you would add them when the component is called, just as you would pass arguments when calling on a regular JavaScript function. for more information, check out [react props docs](https://reactjs.org/docs/components-and-props.html)

### Why validate props in React?

When developing a React application, you might encounter the need for a prop to be structured and defined to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. If you forget to pass a required prop into a component that needs it, it could cause your app to behave unexpectedly.

### Using the `prop-types` library in React

Prior to `React 15.5.0`, a utility named `PropTypes` was available as part of the React package, which provided a lot of validators for configuring type definitions for component props. It could be accessed with `React.PropTypes`.

However, in later versions of React, this utility has been moved to a separate package named `prop-types`, so you need to add it as a dependency for your project in order to get access to the `PropTypes` utility.

```shell
npm install prop-types --save
```

It can be imported into your project files as follows:

```shell
import PropTypes from 'prop-types';
```

then you will be able to use by different [validators provided](https://www.npmjs.com/package/prop-types#usage) and now I think it's an appropriate time to check how we can add prop-types to the `Product.js` component

💎 [ea00c52a8ddd3440c75581d34637da3d5e051879](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/commit/ea00c52a8ddd3440c75581d34637da3d5e051879).

## Presentational and Container Component

- [Presentational and Container Component Pattern](https://scotch.io/courses/5-essential-react-concepts-to-know-before-learning-redux/presentational-and-container-component-pattern-in-react)
- [The difference between Presentational and Container Components](https://flaviocopes.com/react-presentational-vs-container-components/)
- [Presentational and Container Components By **Dan Abramov**](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

💎 [b678eae9198cddb3a7b7119265bf02e57e496962](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/commit/b678eae9198cddb3a7b7119265bf02e57e496962).

☕ ⁉️ 🙋🏻 🙋🏼 [COFFEE TIME](https://ahaslides.com/ZANATYCT)

## React Router

### What is routing?

Routing is the capacity to show different pages to the user. That means the user can move between different parts of an application by entering a URL or clicking on an element.

As you may already know, by default, React comes without routing. And to enable it in our project, we need to add a library named react-router.

To install it, you will have to run the following command in your terminal:

```shell
yarn add react-router-dom
```

Now, we've successfully installed our router, let's start using it in the next section.

### Setting up the router

To enable routing in our React app, we first need to import BrowserRouter from react-router-dom.

In the `index.js` file, enter the following:

```jsx
import App from './App'
import './assets/styles/App.css'
import './assets/styles/index.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<App />, document.getElementById('root'))
/**
 * This should hold everything in our app where
 * routing is needed. That means, if we need routing
 * in our entire app, we must wrap our higher component
 * with BrowserRouter.
 * 
 * By the way, you don't have to rename BrowserRouter as Router
 * as I do here, I just want to keep things readable.
 * A router alone doesn't do much. So let's add a route
 */
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
```

This should hold everything in our app where routing is needed. That means, if we need routing in our entire app, we must wrap our higher component with `BrowserRouter`.

By the way, you don't have to rename `BrowserRouter as Router` as I do here, I just want to keep things readable.

A router alone doesn't do much. So let's add a route in the next section.

### Rendering routes

To render routes, we have to import the Route component from the router package.

In the snippet below

```jsx
import React from "react";

export default function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
    <Route path="/" render={() => <h1>Hello Zanaty!</h1>} />
      </main>
    </Router>
  );
}
```

Then, add it where we want to render the content. The Route component has several properties. But here, we just need path and render.

`path:` the path of the route. Here, we use `/` to define the path of the home page.

`render:` will display the content whenever the route is reached. Here, we'll render a welcome message to the user.

In some cases serving routes like that is perfectly fine. But imagine a case when we have to deal with a real component – using render may not be the right solution.

So, how can we display a real component? Well, the Route component has another property named component.

In your `App.js` file, add the following code:

```jsx
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { deleteProduct, getAllProduct } from './api/ProductAPI'
import ProductList from './containers/ProductList'

const ProductDetails = () => {
  return <>Product Details</>
}

class App extends Component {
  state = {
    products: []
  }

  // code ... 

  render() {
    return (
      <div>
        {/*
          path: the path of the route. Here, we use / to define the path of the home page.
          render: will display the content whenever the route is reached.
        */}
        <Route
          path="/"
          exact
          render={() => (
            <ProductList
              products={this.state.products}
              onDeleteProduct={this.handleDeleteProduct.bind(this)}
            />
          )}
        />
        <Route path="product/:id" component={ProductDetails} />
        <Route render={() => <h1>404: page not found</h1>} />
      </div>
    )
  }
}

export default App
```

you can check the new code at this state

💎 [4b4a9ecae669f1cb12e0c9a6797e2fe1d490edc8](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/commit/4b4a9ecae669f1cb12e0c9a6797e2fe1d490edc8).

Now we have the router working (but still have an issue)! Try navigating to `http://localhost:3000/` and then to `http://localhost:3000/product/1`. Both should work … sort of!

React Router has a ton of features that we're not going to explain here. The docs do a great job.
The `:id` part is a variable. In `http://localhost:3000/product/1`, 1 would be the variable.
The killer feature of React Router is that it's really accessible. It manages things like focus so you don't have to. Pretty great. On the Product Details page, notice that both pages render. It has to do with how React Router does routes.

React Router will render all components that the path match.

React Router does partial matches.
**The URL** `/engineer/mohammed/elzanaty` will match the paths `/`, `/engineer`, `/engineer/mohammed` and `/engineer/mohammed/elzanaty`. It will not match `/mohammed`, `/mohammed/elzanaty`, or `/engineer/elzanaty`.
So let's make it match only one path with a component called Switch.

In your `App.js` file, add the following code:

```jsx
import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { deleteProduct, getAllProduct } from './api/ProductAPI'
import ProductList from './containers/ProductList'
import ProductDetails from './containers/ProductDetails'

class App extends Component {
  state = {
    products: []
  }

  // code ... 

  render() {
    return (
      <div>
        {/*Switch to tell to React Router to load only one route at a time*/}
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ProductList
                products={this.state.products}
                onDeleteProduct={this.handleDeleteProduct.bind(this)}
              />
            )}
          />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route
            path="/404"
            render={() => (
              <div className="page-not-found">
                <h1>404: page not found</h1>
                <Link to="/">Home</Link>
              </div>
            )}
          />
          <Redirect to="/404" />
          <Route />
        </Switch>
      </div>
    )
  }
}

export default App
```

Now notice it only renders one page at a time.

So now let's make the two pages link to each other. Go to `ProductDetails.js`.

```jsx
// at top
import { Link } from "react-router-dom";

// change wrapping <a>
// code....
<Link to={`product/${product.id}`}>
          <h3 className="product-title">{product.title}</h3>
</Link>
// code....
```

you can check the new code at this state

💎 [edf68fe2b6f244f4dd7793780469a66a8866b4c1](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/commit/edf68fe2b6f244f4dd7793780469a66a8866b4c1).

Why did we change this? Didn't the `<a>` work? It did but with a flaw: every link you clicked would end up in the browser navigating to a whole new page which means React would totally reload your entire app all over again. With `<Link>` it can intercept this and just handle that all client-side. Much faster and a better user experience.

Now each result is a link to a product details page! And that id is being passed as a prop to Details. Try replacing the return of Details with:

```jsx
import React, { Component } from 'react'
import { getProductById } from '../api/ProductAPI'
import { Link } from 'react-router-dom'

class ProductDetails extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    // get product
    const productId = this.props.match.params.id
    getProductById(productId).then(product => {
      this.setState({ product })
    })
  }

  render() {
    return <div>Product Details</div>
    return (
      <div>
        <Link className="close-product-details" to="/">
          Close
        </Link>
        <pre>
          <code>{JSON.stringify(this.state.product, null, 2)}</code>
        </pre>
      </div>
    )
  }
}
```

you can check the new code at this state

💎 [ba46061c9cd24866923cee46fe2880dc896f5754](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/commit/ba46061c9cd24866923cee46fe2880dc896f5754).

## Error Boundaries

`<!-- coming soon  🤌🏻 -->`

## Context

`<!-- coming soon  🤌🏻 -->`

## Portals and Refs

`<!-- coming soon  🤌🏻 -->`

## Deploy your Code

You should deploy your code to the cloud and tweet it at me! Great options for places for you to deploy include:

- [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/)
- [Google Firebase](https://firebase.google.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

## [Bonus] TailwindCSS

`<!-- coming soon  🤌🏻 -->`

## Why Redux?

- I think when someone says that Redux is a predictable state container it means that redux has a very strict way
  how to change the data, sometimes called unidirectional data flow.
- I mostly used it in React application, so I can tell which problem it solves in this case. While your application
  is small, you probably will not see the reason to use Redux, but when it grows, when you have lots of components
  which use the same data and have to communicate with each other, it becomes really painful to store all state
  somewhere in the root components and pass it through all the children. There may be performance issues as well,
  all components between a root one a child which needs some part of your state will be re-rendered.
- So using Redux easily connect your components and select those parts of the state which they need. Also,
  communication between components becomes much easier, instead of passing callbacks to props, your components just
  listed to state and represent it, any time you need to change a state just send an action.
- Do you see the problem? While our application grows to a higher number of components, maintaining data consistency
  becomes a hairy challenge. It’s not an easy task to manage each component’s state while sharing it with many other
  components. You’ll likely experience data inconsistency bugs, a fearsome nightmare for frontend developers.
  ![image source Codecentric](https://blog.asayer.io/static/f3b749e44077c9d0fbfc06e129be1439/1727d/5538b516f2c347f8846fe3c15d0d100e.png)
- As shown in the image, Redux takes away the responsibility from individual components to manage a state. Instead,
  we create a single store that handles our state management. On top of that, all communication regarding reading,
  updating, or creating data happens via the store. It prevents data inconsistency bugs from appearing. Moreover,
  components can listen to state changes to update the UI and avoid these data inconsistency bugs.
- Lastly, you can install
  the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
  that give you insights into your application’s current state to simplify debugging or testing your application.
  It’s a great incentive to get started with Redux.

## What is Redux?

- state management lib for javascript applications
- It’s lightweight at 2KB (including dependencies), so you don’t have to worry about it making your application’s
  asset size bigger.
- we can use it with react/angular/vue/vanilla js because it's state management lib, so it does not matter
- Centralizes application's state
- Makes data flow transparent and predictable
- With Redux, the state of your application is kept in a store, and each component can access any state that it
  needs from this store.
- How does it work?
  ![redux architecture](https://miro.medium.com/max/919/1*EdiFUfbTNmk_IxFDNqokqg.png)
  - Users interact with the interface and triggers an action
    - Action with/without payload is sent to a reducer using the dispatcher
    - Reducer checks if it handles the action and produces a new state based on the action and its payload
    - State changes are notified via subscription methods
    - UI renders again based on state changes received via the subscription method

## Pros and Cons of Redux

- Pros
  - Predictable state changes
  - Centralized state
  - Easy Debugging
  - Preserve page state
  - undo/redo
  - ecosystem
- Cons
  - Complexity
  - Verbosity:- you have to write boiler-plate code to get things done

## Function Programming

- is **a programming paradigm** in which we try to bind everything in pure mathematical functions style.
- It is a **declarative** type of programming style. Its main focus is on “what to solve” in contrast to an **
  imperative**
  style where the main focus is “how to solve”
- focuses on results, not the process
- Data is immutable -> Unchanging over time or unable to be changed. / its state cannot change after it’s created.
  If you want to change an immutable object, you can’t. Instead, you create a new object with the new value.
- Decompose the problem into 'functions
- It does not support iteration like loop statements and conditional statements like If-Else
- Here's some most functional programming languages => Haskell, Clojure, Scala, F#
- The first fundamental concept we learn when we want to understand functional programming is pure functions. But
  what does that really mean? What makes a function pure? So how do we know if a function is pure or not? Here is a
  very strict definition of purity

  - It returns the same result if given the same arguments
  - It does not cause any observable side effects example

    ```// impure function
    var tip = 0;
     function calculateTip( mealTotal ) {
        tip = 0.15 * mealTotal;
     }
    calculateTip( 150 )
    console.log(tip)

    // pure function -> The pure function will
    // return the exact result every time,
    // and it doesn’t mutate any data outside of it.
    function isPure(x,y) {
        return x * y
    }
    console.log(isPure(3,5));```
        ````
    `````

## Functions as First-Class Citizens

- In JavaScript, functions are first-class objects, which means they can be:
  - stored in a variable `let fn = function doSomething() {}`, object `let obj = { doSomething : function(){} }`,
    or array `arr.push(function doSomething() {})`
  - pass as an argument `doAction(function doSomething(){});`
    - doSomething is a callback -> is a function passed as an argument to another function.
  - return from other function

## Higher-order Functions

- A function that accepts and/or returns another function

## Functional Composition

- is the process of combining two or more functions to produce a new function.

## Currying

- is a technique of evaluating function with multiple arguments, into sequence of functions with single argument
- is a transformation of functions that translates a function from callable as `f(a, b, c)` into callable
  as `f(a)(b)(c)`
- when a function, instead of taking all arguments at one time, takes the first one and return a new function that
  takes the second one and returns a new function which takes the third one, and so forth, until all arguments have
  been fulfilled. That is, when we turn a function call `sum(1,2,3)` into `sum(1)(2)(3)`
- **Why it’s useful ?**
  - Currying helps we avoid passing the same variable again and again.
  - It helps to create a higher order function

## Pure Functions

![3 ways to avoid side effects](https://cdn-media-1.freecodecamp.org/images/0*4rGYQyYm_m8Byoyj.png)

- we can call if the function is pure or not if passing `same args` everytime you will get `same result`
- accept an input and returns a value without modifying any data outside its scope(Side Effects)
- This test itself is a checklist. **A few examples of side effects are**
  - Mutating your input
  - console.log
  - HTTP calls (AJAX/fetch)
  - Changing the filesystem (fs)
  - Querying the DOM
  - random values
  - current data/time

## Immutability

- once object created, can not be changed if you need to change the object you need to take a copy first then change
  this object
- pros
  - Predictability
  - Faster Change Detection
  - Concurrency
- Cons
  - Performance
  - Memory Overhead
    `let book = {} book.title = '...'`
    if you building application with redux you should not mutate data because that's a fundamental principle in
    redux

## Updating Objects

![shallow, deep copy](https://i.stack.imgur.com/AWKJa.jpg)

- Deep copy
  - Store copies of the object's value.
  - Doesn't reflect changes made to the new/copied object in the original object.
- Shallow Copy
  - Reflect changes made to the new/copied object in the original object
  - Stores the copy of the original object and points the references to the objects.

## Updating Arrays

## Redux Data Flow Concepts

[Redux Data Flow Concepts](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)

## Redux Functions

- [x] Compose
- [x] Reducer & CreateStore
- [x] Store dispatch & Subscribe
- [x] combineReducers
- [x] bindActionCreators
- [x] Middleware in Redux

## Redux React

- [x] Counter
- [x] Setup Todos App
- [x] Normalize Data -- sample [noraml-api](https://fakestoreapi.com/products)
      , [normalize-api](https://github.com/matthieuchoplin/would-you-rather/blob/master/src/utils/_DATA.js)
  - [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)
  - The basic concepts of normalizing data are:
    - Each type of data gets its own "table" in the state.
    - Each "data table" should store the individual items in an object, with the IDs of the items as keys and
      the items themselves as the values.
    - Any references to individual items should be done by storing the item's ID.
    - Arrays of IDs should be used to indicate ordering.
  - [Why You Need to Normalize Redux Data](https://outline.com/wv7ZJW)
  - Now it is easy to update a user using this data. You can update the users without modifying any of the posts.
    Because the posts do not change, the Post component does not need to update, only the User component does.
    Similarly, reordering the likes only involves sorting the list of ids and does not cause each User component
    to update. This can lead to a huge performance win if you have a lot of likes.
- [x] Todo App
  - [Demo](https://ct3e9.csb.app/)
- mapDispatchToProps

  - As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.
  - dispatch is a function of the Redux store.
  - You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
  - With React Redux, your components never access the store directly - connect does it for you.
  - React Redux gives you two ways to let components dispatch actions:
    - a connected component receives props.dispatch and can dispatch actions itself.
    - connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch
      when called, and pass those functions as props to your component.
  - If you don't specify the second argument to connect(), your component will receive dispatch by default. For
    example:

    ```
    connect()(MyComponent)
    // which is equivalent with
    connect(null, null)(MyComponent)

    // or
    connect(mapStateToProps /** no second argument */)(MyComponent)
    ```

  - Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch.
  - Therefore, instead of calling props.dispatch(() => increment()), you may call props.increment() directly.
    - There are a few reasons why you might want to do that.
      - More Declarative
        - encapsulating the dispatch logic into function makes the implementation more declarative.
        - Dispatching an action and letting the Redux store handle the data flow is how to implement the
          behavior, rather than what it does.
        - if you define your own mapDispatchToProps, the connected component will no longer receive
          dispatch.
      - Pass Down Action Dispatching Logic to ( Unconnected ) Child Components
        - allows more components to dispatch actions, while keeping them "unaware" of Redux.
  - connect => encapsulates the logic of talking to the Redux store and lets you not worry about it. And this is
    what you should totally make full use of in your implementation.
  - Two Forms of mapDispatchToProps
    - Function form: Allows more customization
    - Object shorthand form: More declarative and easier to use

## Middle Ware Redux

- [Middle Ware Redux](https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware)
- [Data Flow](https://redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif)
- So far, all the data we've worked with has been directly inside of our React+Redux client application.
  However, most real applications need to work with data from a server, by making HTTP API calls to fetch and save items.
- By itself, a Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.
- we said that Redux reducers must never contain "side effects". A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function.
- Redux middleware were designed to enable writing logic that has side effects.
- a Redux middleware can do anything when it sees a dispatched action: log something, modify the action, delay the action, make an async call, and more.
- implement logger
- What if we wrote a middleware that let us pass a function to dispatch, instead of an action object? We could have our middleware check to see if the "action" is actually a function instead, and if it's a function, call the function right away. That would let us write async logic in separate functions, outside of the middleware definition.

## Thunk

- [Thunk](https://daveceddia.com/what-is-a-thunk/)
- thunk, n. A thunk is another word for a function. But it’s not just any old function. It’s a special (and
  uncommon) name for a function that’s returned by another. Like this:
- function that return another function

  ```javascript
  function definitlyNotAThunk() {
    // this one is a "thunk" because it defers work for later:
    return function athunk() {
      // it can be named, or anonymous
      return console.log('Hi, I am A thunk');
    };
  }
  ```

- You already know this pattern. You just don’t call it “thunk.” If you want to execute the “do stuff now” part, you
  have to call it like wrapper_function()() – calling it twice, basically.
- The Major idea behind a thunk is that it's code to be executed later
- give the redux ability to wait
- Actions are just objects. As far as Redux is concerned, out of the box actions must be plain objects, and they
  must have a type property. Aside from that, they can contain whatever you want – anything you need to describe the
  action you want to perform.

```javascript
// regular action creator
// 1. plain object
// 2. has a type
// 3. whatever else you wan
export const getAllItems = items => ({
  type: UPDATE_ALL_ITEMS,
  payload: { items },
});
```

- Actions are Boring Isn’t it kind of funny that Redux’s so-called “actions” don’t actually do anything? They’re
  just objects. Plain and simple and inert.
- Wouldn’t it be cool if you could actually make them do something? Like, say, make an API call, or trigger other
  actions?
- Since reducers are supposed to be “pure” (as in, they don’t change anything outside their scope) we can’t do any
  API calls or dispatch actions from inside a reducer.
- If you want an action to do something, that code needs to live inside a function. That function (the “thunk”) is a
  bundle of work to be done.
- It would be nice if an action creator could return that function – the bundle of work – instead of an action
  object. Something like this:

```javascript
function getItems() {
  return function () {
    return axios.get('/items');
  };
}
```

- If only there were some way to teach Redux how to deal with functions as actions…
- Well, this is exactly what redux-thunk does: **it is a middleware that looks at every action that passes through
  the system, and if it’s a function, it calls that function. That’s all it does.**
- The only thing I left out of that little code snippet is that Redux will pass two arguments to thunk functions:
  dispatch, so that they can **dispatch** new actions if they need to; and **getState**, so they can access the
  current state. So you can do things like this:

```javascript
function getAll() {
  return function (dispatch, getState) {
    return axios.get('/items').then(items => {
      // pretend we declared an action creator
      // called 'getITems', and now we can dispatch it
      dispatch(getAllItems(items));
    });
  };
}
```

- the getState function can be useful for deciding whether to fetch new data, or return a cached result, depending
  on the current state.
