# Contribution Guidelines

Did you like this our components and want to contribute? We'd love your help!

Our purpose is made UI components to responsive interfaces, following a minimalist design.

Each component need be/have

- agnostic to framework (pure javascript, then porting to any frameworks, but always using as core the pure javascript module)
- mobile first (help to be minimalist, and responsive)
- focus on UX
- great performance (we love few bytes)

Finally, technically speaking, our components are compound that way:

### Custom tags
We prefer custom tags to keep html clean. We like all layers clean. So this

```pug
mn-image(src='/path/to/image.jpg')
```

It is more readable than

```pug
img.mn-image(src='/path/to/image.jpg')
```

And not only to make a readable and clean code in html, this allow us to improve and release new versions of our component, without break old versions, when the markup change abruptly.

In the shadows, this above example, create a markup like this in runtime:

```pug
mn-image(src='/path/to/image.jpg')
    :before
    img(src='/path/to/image.jpg')
```

If tomorrow we want add more elements inside mn-image, our custom tag know how do it. Because, behinde of each custom tag, we have a javascript class.

To create this tag using javascript, you can do:

```js
let mnImage = document.createElement('mn-image');
mnImage.setAttribute('src', 'path/to/an/image.jpg');

document.querySelector('body').appendChild(mnImage);
```

### Javascript Class

The logic of each component is built in inside a javascript class. This allow to us, a clean code to define what our custom component do. We can do things when the tag is appended to html, or when component is instanciated from javascript. We can too know when a attribute is changed, or know when the component is removed, etc.

A example of class is below:

```js
class MnImage extends HTMLElement {
  constructor() {
      // here what you want do when element was instantiated via html or javascript
  }

  // more methods, be things what you can do, example
  setImage() {
        // a method to set image inside this component, using attributes defined in component
  }
}
```

Finally to register our class to an tag, we use the module [document-register-element](https://github.com/WebReflection/document-register-element), they add cross-browser support to method .registerElement() from HTML5.

The code to set a custom tag with a custom class is:

```js
import customElements from 'document-register-element';

// first argument is the name of tag, e.g. mn-image
// the second argument is the name of class to use to custom element, in example below, MnImage
customElements.define('mn-image', MnImage);
```


### Tools

Finally, if you want run locallly and check in realtime your changes, just clone the module, and run with Gulp.
Gulp will run a lot of tasks like tranpile es6 code to es5, lint script, compile sass styles, etc. And obviously serve a page with preview in localhost:3000. So

```sh
# clone the project
git clone https://github.com/minimalist-components/mn-MODULE_NAME
```

then install dependencies

```sh
npm install
```

and run with gulp `default` task

```sh
gulp
```
