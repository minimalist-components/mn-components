# Contribution Guidelines

Did you like this components and want to contribute? We'd love your help!

Our purpose is to make UI components which play well with responsive interfaces, following a minimalist design.

Each component must have (or be):

- Agnostic to framework (Always use pure javascript as core, then you can port it to any framework)
- Mobile first (Minimalist and responsive)
- Focused on UX
- A great performance (we like it small :D)

Finally, technically speaking, our components are composed following those rules.

### Custom tags

We prefer custom tags in order to keep a clean HTML code. So, keep in mind that this:

```pug
mn-image(src='/path/to/image.jpg')
```

Which compiles to:

```html
<mn-image src="/path/to/image.jpg">
```

Is better than this:

```pug
img.mn-image(src='/path/to/image.jpg')
```

Which compiles to:

```html
<img class="mn-image" src="/path/to/image.jpg">
```

Not only this will make your code more easily readable and clean to us and others, but also allows us to improve and release new versions of your code without breaking old versions, this means, when the markup changes abruptly.

Behind the curtains, this example above will create a markup like this during runtime:

```pug
mn-image(src='/path/to/image.jpg')
    :before
    img(src='/path/to/image.jpg')
```

If later we try to add more elements inside `mn-image`, our custom tag know how to do it, because behind each custom tag, we have a javascript class.

To create this tag using javascript, you can do:

```js
let mnImage = document.createElement('mn-image');
mnImage.setAttribute('src', 'path/to/an/image.jpg');

document.querySelector('body').appendChild(mnImage);
```

### Javascript Class

The logic of each component is built within a javascript class. This allows us to create and develop a cleaner code to define what will our custom component do. We can also do things when the tag is appended to html, or when the component is instanciated from another javascript code. It is also possible to know when an attribute is changed, or when the component is removed, etc.

An example of class below:

```js
class MnImage extends HTMLElement {
  constructor() {
      // here goes what you want to do when the element is instantiated via html or javascript
  }

  // more methods, things that you can do, example
  setImage() {
        // a method to set the image inside this component, using attributes defined in the component
  }
}
```

Finally to register our class to a tag, we use the module [document-register-element](https://github.com/WebReflection/document-register-element), they add cross-browser support to method .registerElement() from HTML5.

The code to set a custom tag with a custom class is:

```js
import customElements from 'document-register-element';

// first argument is the name of tag, e.g. mn-image
// the second argument is the name of class to use to custom element, in example below, MnImage
customElements.define('mn-image', MnImage);
```


### Tools

Finally, if you want to run locallly and check your changes in realtime, just clone the module and run with Gulp.

Gulp is going to run a lot of tasks like transpile es6 code to es5, linting, compile sass styles, and so on... And in the end it will serve a page with the component preview in localhost:3000.

```sh
# clone the project
git clone https://github.com/minimalist-components/mn-MODULE_NAME
```

Then

```sh
# install dependencies
npm install
```

```sh
# concat dependencies, in vendor.js and vendor.css
npm run bundle
```

```sh
# start a local server, and watch changes in files
npm start
```

finally, access in browser localhost:3000/demo.html
