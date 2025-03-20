# Props (Properties)
    Props are used to pass data from a parent component to its child components. 
    They are immutable, meaning a child component cannot directly modify the props it receives. 
    Props facilitate a one-way data flow, ensuring that changes originate from the parent component. 
    This helps maintain predictability and simplifies debugging. 

    // Parent Component
    function ParentComponent() {
        const message = "Hello from Parent";
        return <ChildComponent text={message} />;
    }

    // Child Component
    function ChildComponent(props) {
        return <p>{props.text}</p>;
    }

    In this example, ParentComponent passes the message as a prop named text to ChildComponent. 
    ChildComponent then renders the received text.

# State
    State is used to manage data that changes within a component over time. 
    It is mutable, meaning the component can update its own state using the setState method 
    (or useState hook in functional components). 
    Changes to the state trigger a re-render of the component, allowing it to reflect the updated data. 

    // Functional Component with useState hook
    import React, { useState } from 'react';

    function Counter() {
        const [count, setCount] = useState(0);

        return (
            <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
    }

    Here, the Counter component uses the useState hook to manage the count. 
    Clicking the button updates the count, causing the component to re-render and display the new value.

# Props Drilling 
    ●   Passing props is a great way to explicitly pipe data through your UI tree to the components that use it. 
    ●   But passing props can become inconvenient when there is a huge tree of components which has a 
        parent component having children components and these children components are also parents to their children components. 
    ●   In this case, lifting the state up can lead to a situation called Prop Drilling 

# Context
    What is React Context ? 
        ●   React context is a method to pass props from parent to child components, by storing the props in a store 
            (similar in redux) and using these props from the store by child components without actually passing 
            them manually at each level of the component tree. 
        ●   Using Redux to interact with states from parent to child components is not only quite difficult to 
            understand but also gives you more complex code. 
        ●   Through the usage of context, the understanding of concept and code is far easier than that of Redux. 
        ●   Whenever you want a store to keep your states or variables in and use them elsewhere in your program, use Context  . 
        ●   Generally when we have two or more levels (height) in our component tree, it is viable to use a store instead of 
            passing props and then lifting the state as this will create confusion and unnecessary lengthy code. 

    Create and provide the context 

            import { createContext } from "react"

            export const CartConetxt = createContext({
                items: [],
            })

        ●   In the above code, a context is created using the createContext which is imported from react  . 
        ●   We have given a default value this i.e. an object which has a list named items  . 
        ●   We can pass any value to the context while creating it such as a string, number, list, object, etc. 
        ●   This context is now assigned to a variable named CartContext which is being exported to use in other components. 

            import { CartContext } from "./store.js";

            const App = () => {
                return(
                    <CartContext.Provider>
                        <Header />
                        <Body />
                    </CartContext.Provider>
                )
            }

        ●   In the above code, the CartContext is imported in the <App /> component and is being used as a wrapper 
            of the <Header /> and  <Body /> component. 
        ●   This will make the context available to access for the application. 
        ●   createContext returns a context object. 
        ●   The context object itself does not hold any information. 
        ●   It represents which context other components read or provide. 
        ●   The context object has a few properties: 
            ○   SomeContext.Provider : lets you provide the context value to components. 
            ○   SomeContext.Consumer : is an alternative and rarely used  way to read the context value. 
        ●   The above code will still throw an error because we also need to pass a default value to the Provider. 

            import { CartContext } from "./store.js"

            const App = () => {
                return(
                    <CartContext.Provider value={{ items: [] }}>
                        <Header />
                        <Body />
                    </CartContext.Provider>
                )
            }

    Consuming the Context 

            import { useContext } from "react"
            import { CartContext } from "./store.js"

            const Header = () => {
                const cartCtx = useContext(CartContext)
                return(
                    <h1>Hello</h1>
                )
            }
   
        ●   To consume the context, we make use of the  useContext hook. 
        ●   useContext returns the context value for the context you passed. 
        ●   To determine the context value, React searches the component tree and finds the closest context 
            provider above for that  particular context. 