## Decorator Example

Decorators are a convenient way to wrap properties and behaviour with extra functionality.

Decorators as a design pattern have been around since the original GoF design patterns
https://en.wikipedia.org/wiki/Decorator_pattern

They have more in common with Java annotations than with the decorator pattern
https://en.wikipedia.org/wiki/Java_annotation

Java annotations: my BLOG: http://katieleonard.ca/blog/2017/annotating-java/

They are more similar to decorators in Python (and annotations in Java), which are syntactic sugar for simple wrappers

In Java, annotations can be used at compile time and at runtime to apply extra behaviours to a class or property. Python has a similar metaprogramming interface which has inspired the javascript implementation proposed by wycats
https://en.wikipedia.org/wiki/Java_annotation
https://en.wikipedia.org/wiki/Python_syntax_and_semantics#Decorators
https://github.com/wycats/javascript-decorators

Decorators are useful for adding extra functionality to behaviours and properties that would otherwise look like boilerplate -- such as cacheing, access control, logging, instrumentation.

### Getting started

Since decorators are currently in the proposal stage (https://tc39.github.io/proposal-decorators/), getting started requires a little tweaking of your standard babel/webpack/linter configs.

#### Babel

```
> npm install -g webpack
> npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-plugin-transform-decorators-legacy
```

in your .babelrc

```
{
  "presets": [
    "es2015"
  ],
  "plugins": [
    "transform-decorators-legacy"
  ]
}
```

#### Webpack
here is a barebones webpack.config.js

```
var path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
      loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        plugins: [
          'transform-decorators-legacy',
        ],
        presets: ['es2015'],
      },
    }
  ]
  },
  stats: {
    colors: true
  }
}
```

the important bit is to add 'transform-decorators-legacy' to the plugins array.

#### Linting error -- or is it? 🤔
If you use VSCode, you will probably run across a linter error that says

```
[js] Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning.
```

This is an error in the VSCode JS support, rather than a linter error.

Add a jsconfig.json file to your project root with the following contents:

```
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

Be sure to restart VSCode, and the problem should go away. If it doesn't, follow [this thread](https://github.com/Microsoft/vscode/issues/28097) for further information.


### How does it work?

A decorator function runs before the object it decorates is installed on the prototype. When you define an undecorated object like this:

```
class ExampleWithoutDecoration {
  doWork() {
    console.log('can\'t you see I\'m working here?')
  }
}
```

The Javascript engine creates an object (ExampleWithoutDecoration) and installs the `doWork` method on its prototype:

```javascript
Object.defineProperty(ExampleWithoutDecoration.prototype, 'doWork', {
  value: specifiedFunction,
  enumerable: false,
  configurable: true,
  writable: true
})
```

When you define a DECORATED method like this:

```javascript
class ExampleWithDecoration {

  @DecoratingIsFun
  doWork() {
    console.log('can\'t you see I\'m working here?')
  }
}
```

The Javascript engine saves some temporary state, runs the decorator function, and then installs the `doWork` method on the object's prototype.

```javascript
let methodDescription = {
  type: 'method',
  initializer: () => specifiedFunction,
  enumerable: false,
  configurable: true,
  writable: true
};

methodDescription = DecoratingIsFun(ExampleWithDecoration.prototype, 'doWork', methodDescription) || methodDescription

defineDecoratedProperty(ExampleWithDecoration.prototype, 'doWork', methodDescription);

function defineDecoratedProperty(target, { initializer, enumerable, configurable, writable }) {
  Object.defineProperty(target, { value: initializer(), enumerable, configurable, writable })
}
```

In this case, the `DecoratingIsFun` method is run with `this` set to the object prototype, and it has the opportunity to modify/return a methodDescription, or use the previously specified methodDescription.

Consider `DecoratingMakesSense`, which makes the `doWork` method non-writeable:

```javascript
const DecoratingMakesSense = (object, methodName, description) => {
  console.log('Decorating makes sense')

  description.writable = false
  return description
}

class ExampleWithDetailedDecoration {
  @DecoratingMakesSense
  doWork() {
    console.log('can\'t you see I\'m working here?')
  }
}

const makesSense = new ExampleWithDetailedDecoration()
makesSense.doWork()
makesSense.doWork = () => console.log('some other function')
```

```bash
> node build/main.js
Decorating makes sense
can't you see I'm working here?

/Users/kleonard/newrelic/decorator-example/build/main.js:164
makesSense.doWork = function () {
                  ^

TypeError: Cannot assign to read only property 'doWork' of object '#<ExampleWithDetailedDecoration>'
    at Object.defineProperty.value (/Users/kleonard/newrelic/decorator-example/build/main.js:164:19)
    at __webpack_require__ (/Users/kleonard/newrelic/decorator-example/build/main.js:20:30)
    at i (/Users/kleonard/newrelic/decorator-example/build/main.js:63:18)
    at Object.<anonymous> (/Users/kleonard/newrelic/decorator-example/build/main.js:66:10)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
```

### Writing your decorator

Since a decorator is a function that runs before the object, property, or method is installed

### Build and run

```
> webpack
Hash: 63cf378bd6d165758ed8
Version: webpack 3.8.1
Time: 457ms
  Asset     Size  Chunks             Chunk Names
main.js  4.47 kB       0  [emitted]  main
   [0] ./index.js 1.7 kB {0} [built]
   [1] ./decorator.js 195 bytes {0} [built]

> node build/main.js
Decorating is fun
can't you see I'm working here?
```
