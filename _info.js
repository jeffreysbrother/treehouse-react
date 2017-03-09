// three arguments
// string: element name
// object of key/value pairs describing attributes
// children: string or more elements

React.createElement('a', {
  href: "https://teamtreehouse.com"
}, "Treehouse");

// JSX: XML style syntax
// instead of this...

var myLink = React.createElement('a', {
  href: "https://teamtreehouse.com"
}, "Treehouse");

// ...we can write this...

var myLink = (
  <a href="https://teamtreehouse.com">
    Treehouse
  </a>
);

// if JSX is used, we need to introduce a build step that translates the JSX
// component into a React.createElement() call that the browser can
// understand (Babel)
// it does much more than JSX translation, though (ES6, etc)

// JSX is not HTML: it's just an alternate syntax for calling
// functions in JavaScript

// start a server first!!!!
// python -m SimpleHTTPServer 8000
