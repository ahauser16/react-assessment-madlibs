## Conceptual Exercise

Answer the following questions below:

### What is React? When and why would you use it?

#### React is a JavaScript library for building user interfaces, particularly single-page applications where data changes over time. It allows developers to create large web applications that can update and render efficiently in response to data changes.

### What is Babel?

#### Babel is a JavaScript compiler that transforms modern JavaScript code into a version that is compatible with older browsers. It allows developers to use the latest JavaScript features without worrying about browser support.

### What is JSX?

#### JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe what the UI should look like. JSX makes it easier to write and add HTML in React.

### How is a Component created in React?

#### A component in React can be created either as a function or a class. Function components are simpler and are typically used for presentational purposes, while class components can hold and manage state.

```javascript
// Function Component
function MyComponent() {
  return <div>Hello, World!</div>;
}

// Class Component
class MyComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}
```

### What are some difference between state and props?

#### `state` is managed within the component and can change over time, typically in response to user actions whereas `props` are read-only and are passed to the component by its parent which are used to pass data and event handlers down to child components.

### What does "downward data flow" refer to in React?

#### "Downward data flow" means that data in React flows from parent components to child components via props. This ensures that the state is managed in a predictable way and makes the application easier to understand and debug.

### What is a controlled component?

#### A controlled component is a component where React controls the form elements' values via state. The form data is handled by the React component, not the DOM.

```javascript
function ControlledComponent() {
  const [value, setValue] = React.useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

### What is an uncontrolled component?

#### An uncontrolled component is a component where the form data is handled by the DOM itself. React does not control the form elements' values.

```javascript
function UncontrolledComponent() {
  const inputRef = React.useRef(null);

  return <input type="text" ref={inputRef} />;
}
```

### What is the purpose of the `key` prop when rendering a list of components?

#### The `key` prop helps React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

### Why is using an array index a poor choice for a `key` prop when rendering a list of components?

#### Using an array index as a key can lead to issues with component state and performance. If the list is reordered, React may not correctly identify which items have changed, leading to inefficient updates and potential bugs.

### Describe `useEffect`.  What use cases is it used for in React components?

#### `useEffect` is a hook that lets you perform side effects in function components. It is used for tasks like data fetching, subscriptions, or manually changing the DOM. It runs after the render and can optionally clean up after itself.

```javascript
React.useEffect(() => {
  // Perform side effect
  return () => {
    // Cleanup
  };
}, [dependencies]);
```

### What does `useRef` do?  Does a change to a `ref` value cause a rerender of a component?

#### `useRef` returns a mutable `ref` object whose `.current` property is initialized to the passed argument. It does not cause a rerender when the `ref` value changes.

```javascript
const myRef = React.useRef(initialValue);
```

### When would you use a `ref`? When wouldn't you use one?

#### Use a `ref` to access a DOM element directly or to keep a mutable value that does not cause a rerender when updated. Avoid using `ref`s for anything that can be done declaratively with state.

### What is a custom hook in React? When would you want to write one?

#### A custom hook is a function that uses other hooks to encapsulate and reuse stateful logic. Write a custom hook when you have logic that needs to be shared across multiple components.

```
function useCustomHook() {
  const [state, setState] = React.useState(initialValue);
  // Custom logic
  return [state, setState];
}
```