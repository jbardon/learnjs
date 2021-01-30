# TODO

Reference API: https://reactjs.org/docs/react-api.html#overview

* [Concurrent Mode](https://reactjs.org/docs/concurrent-mode-intro.html)
* Hooks: useCallback, useMemo
* [Profiling](https://reactjs.org/docs/profiler.html)
* [Render props](https://reactjs.org/docs/render-props.html)
* > [Error boundaries](https://reactjs.org/docs/error-boundaries.html): not catch error leave empty UI??
* Make `ng-content` and `@ContentChildren` with `props.children`
* Make `TemplateRef`, structural directives and `ngComponentOutlet`/`ngTemplateOutlet` with function render props (local function with props or component)

## Refs

Similar to *template reference variable*, *@ViewChild* and *ElementRef*.  

In the example, we get component host ref because React replace DOM element.
There is no such a `<App></App>` tag in the final HTML.

Integrate with DOM and third-party libraries: https://reactjs.org/docs/uncontrolled-components.html

```jsx
function App() {
  // OR React.createRef();
  const divRef = React.useRef(null);

  setTimeout(() => {
    console.log('ref', ref.current);
  }, 10)

  return (
    <div ref={ ref }>App</div>
  );
}
```

## Style (module)

https://create-react-app.dev/docs/adding-a-css-modules-stylesheet

* '.module' extension make create-react-app use CSS Module (scoped CSS)
* '.scss' extension enable post-processing

Using CSS modules instead of inline style or other JS, allows to use full CSS features.
For instance use pseudo elements such as `before` and `hover`.
https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e#.re1pdcz87

Use [classnames](https://www.npmjs.com/package/classnames) library to have `ngClass` like syntax.

```scss
// App.module.scss
.app {
  color: red;
}
```

```js
import style from './App.module.scss';

function App() {
  return (
    <div className={ style.app }>App component</div>
  );
}
```

## Portals

Portals are designed to render React stuff outside of app scope.
It means we can't `useRef` but only `document.querySelector` (eventually create the element in `body`)

## Change detection

Basic React change detection is like Default for Angular.
Can mitigate with `shouldComponentUpdate` to avoid some renders.
Also `useEffect` is close to mutating values in `ngDoCheck` with `KeyValueDiffers`.  

`PureComponent` is for class based and `React.memo` for function based component.
The behavior is equivalent to Angular `ChangeDetectionStrategy.OnPush`.  

In components using hooks, function reference are created again at each render.
If they don't use state/props move them outside of component or wrap them with `useCallback` or `useMemo`. 

* `useCallback` returns the function but memoized, same reference until a dependencies changes. It should be called to get the result.
* `useMemo` calls the inner function and returns the results. It return a value and don't call the inner function again until dependencies changes.
