# useState
    useState is a React Hook that enables functional components to manage state. 
    It provides a way to declare state variables and update them, triggering re-renders of the component when changes occur. 
    This is essential for building dynamic and interactive user interfaces

    # Code

    import React, { useState } from 'react';

    function ExampleComponent() {
        // Declare a state variable named 'count' with an initial value of 0
        const [count, setCount] = useState(0);
        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
    }

# useEffect
    It is called every time after the component is rendered. But because of the dependancy arry the behaviour of the render
    will changed.
    It comes with two arguments
        1. Callback function
        2. Dependancy array (not mandetory)

    Dependancy Array
        a) If no dependancy arry => useEffect is called on every render.
        b) If the dependancy array is empty = [] => useEffect is called on initial render just once.
        c) If the dependancy array is not empty => useEffect is called on everytime whenever the array is updated.

# useContext
    useContext is a React Hook that enables functional components to subscribe to a React context.
    The primary reason for using useContext is to avoid "prop drilling," a situation where data is passed down 
    through multiple levels of components that don't actually need it, just to reach a deeply nested component that does.

    Instead of passing props down the tree, useContext allows a component to directly access data from a context provider 
    defined higher up in the component tree.

    This simplifies the component structure, improves code readability, and makes maintenance easier. 
    It is especially useful for sharing data that can be considered "global" for a subtree of components, 
    such as themes, user authentication status, or locale preferences.

    # Code

    import React, { useContext } from 'react';
    import MyContext from './MyContext';

    function MyComponent() {
        const contextValue = useContext(MyContext);
        return (
            <div>
                {/* Use the context value */}
                {contextValue}
            </div>
        );
    }

    export default MyComponent;

# useReducer
    The useReducer hook in React is used for managing more complex state logic than what is typically handled by useState. 
    It is particularly useful in scenarios where the next state depends on the previous state or when dealing with multiple 
    sub-values within the state.

    useReducer accepts a reducer function and an initial state as arguments and returns the current state and a dispatch 
    function. 
    The reducer function contains the logic for how the state should be updated based on different actions. The dispatch 
    function is used to trigger these state updates.

    # Code

    import { useReducer } from 'react';

    function reducer(state, action) {
        if (action.type === 'incremented_age') {
            return {
            age: state.age + 1
            };
        }
        throw Error('Unknown action.');
    }

    export default function Counter() {
        const [state, dispatch] = useReducer(reducer, { age: 42 });
        return (
            <>
                <button onClick={() => {
                    dispatch({ type: 'incremented_age' })
                }}>
                    Increment age
                </button>
                <p>Hello! You are {state.age}.</p>
            </>
        );
    }

# useMemo
    useMemo is a React Hook that serves to optimize performance by memoizing the result of a computation. 
    It's employed when a component re-renders frequently, and a specific calculation is expensive and doesn't change between 
    renders unless its dependencies change. 

    The primary purpose of useMemo is to prevent unnecessary recalculations. When a component re-renders, all functions within 
    it are typically re-executed. 
    If a function performs a complex or resource-intensive calculation, this can lead to performance bottlenecks, 
    especially if the result of the calculation remains the same across multiple renders.

    useMemo addresses this by caching the result of the function and only re-executing it when its dependencies change. 
    The hook takes two arguments: a function that performs the calculation and an array of dependencies. 
    The function is only executed when one or more of the dependencies have changed since the last render. 
    Otherwise, useMemo returns the cached result from the previous render.

    # Code

    const memoizedValue = useMemo(() => {
        // Expensive calculation here
        return computeExpensiveValue(a, b);
    }, [a, b]); // Dependencies

# useCallback
    The useCallback hook in React primarily serves as a performance optimization tool. 
    It memoizes a callback function, returning the same function instance across renders unless its dependencies change.

    In this example, handleClick is memoized using useCallback. It will only be recreated if count or onButtonClick changes. 
    This ensures that if MyComponent is a child of a memoized component, it won't cause the parent to re-render unnecessarily 
    unless count or onButtonClick actually change.

    # Code 

    import React, { useState, useCallback } from 'react';

    const MyComponent = ({ onButtonClick }) => {
        const [count, setCount] = useState(0);

        const handleClick = useCallback(() => {
            onButtonClick(count);
        }, [count, onButtonClick]);

        return (
            <button onClick={handleClick}>
                Click me ({count})
            </button>
        );
    };

# useRef
    useRef is a React Hook that allows to create a mutable object, known as a "ref", which can hold a reference to a DOM 
    element or any other value. 
    This ref persists across renders, and unlike state variables, changing the value of a ref does not trigger a re-render 
    of the component. 

    # Code

    import { useRef } from 'react';

    export default function Counter() {
        let ref = useRef(0);

        function handleClick() {
            ref.current = ref.current + 1;
            alert('You clicked ' + ref.current + ' times!');
        }

        return (
            <button onClick={handleClick}>
                Click me!
            </button>
        );
    }
