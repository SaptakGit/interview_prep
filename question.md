1. What is react js?
2. What are the major features of react?
    1. Component-based architecture: 
            React builds user interfaces from small, independent, and reusable pieces of code called components. 
    2. Virtual DOM: 
            Instead of directly manipulating the browser's DOM, React uses a virtual representation to perform updates. It compares the new version with the previous one and updates only the specific, changed parts of the real DOM, leading to better performance. 
    3. JSX (JavaScript XML): 
            This is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files, making it easier to define component structures. 
    4. Declarative programming: 
            You can tell React what you want the UI to look like for a given state, and React will handle updating the DOM to match it. This makes the code more predictable and easier to debug. 
    5. One-way data binding: 
            Data flows in a single direction (downward from parent to child), which makes the application's data flow more predictable and easier to manage. 

3. What is virtual DOM and how it works?
4. What are the components in react?
    In React, components are the fundamental building blocks for creating user interfaces. They are independent, reusable pieces of code that encapsulate both UI and logic.
    Here are the key components and concepts related to them in React:
    -> 4.A. Explain Class components with example.
        Class Components: These are JavaScript classes that extend React.Component and have a render() method that returns JSX. While still supported, they are less commonly used in new development compared to functional components.
            class Welcome extends React.Component {
                render() {
                    return <h1>Hello, {this.props.name}</h1>;
                }
            }
    -> 4.B. Explain Functional components with example.
        Functional Components: These are JavaScript functions that accept props as an argument and return JSX (React's syntax extension for describing UI). They are the preferred method for writing components in modern React due to their simplicity and integration with Hooks for managing state and side effects.
            function Welcome(props) {
                return <h1>Hello, {props.name}</h1>;
            }
5. What is JSX?
6. How to export and import components?
7. How to use nested components?
8. What is state in react?
    In React, state refers to a special object within a component that holds data or information that can change over time. This data is local to the component and determines how the component behaves and what it displays on the screen.
    Here are the key characteristics of state in React: 
        Mutable and Local: 
            Unlike props, which are immutable and passed down from parent components, state is mutable and managed internally within a component. It's not directly accessible by other components unless explicitly passed down as props.
        Drives UI Updates: 
            When the state of a component changes, React automatically re-renders the component to reflect the updated data in the user interface. This is a fundamental concept for building dynamic and interactive UIs.
        Component's Memory: 
            State allows a component to "remember" information between renders. For example, a counter component's state might store the current count, or a form component's state might store the values entered by the user.
        Managed with Hooks (Functional Components): 
            In modern React, functional components manage state using the useState Hook. This hook returns an array containing the current state value and a setter function to update it.
    -> 8.A. Example
            import React, { useState } from 'react';

            function Counter() {
                const [count, setCount] = useState(0); // count is the state, setCount is the setter

                const increment = () => {
                    setCount(count + 1);
                };

                return (
                    <div>
                        <p>Count: {count}</p>
                        <button onClick={increment}>Increment</button>
                    </div>
                );
            }
9. How to update state in react?
10. Why you should not update state directly, explain with example?
    React's Reconciliation and Performance Optimization: 
        React relies on comparing the old and new state to determine if a component needs to re-render. If you mutate the state directly, React's shallow comparison might not detect a change, leading to the UI not updating even though the underlying data has changed. This is particularly problematic with performance optimizations like React.memo or PureComponent which rely on shallow comparisons.
    Immutability and Predictable State: 
        React promotes the concept of immutable data. By creating a new copy of the state with the desired changes instead of modifying the existing one, you ensure that the old state remains untouched. This makes your application's state more predictable and easier to reason about, especially when dealing with complex data structures or asynchronous operations.
    Debugging Challenges: 
        When state is directly mutated, it can be difficult to track down where and when the changes occurred, making debugging more challenging. Using state update functions provides a clear and controlled way to modify state.

        const [items, setItems] = useState(['Apple', 'Banana']);

        const addItem = () => {
            // INCORRECT: Directly mutating the 'items' array
            items.push('Orange'); 
            setItems(items); // This might not trigger a re-render consistently
        };

        const addItem = () => {
            // CORRECT: Creating a new array with the spread operator
            setItems([...items, 'Orange']); 
        };
11. What is setState callback?
12. What are props in react?
13. What is difference between state and props?
14. What is lifting state up in react?
        Lifting state up is a common pattern in React (and similar component-based frameworks) used to share state between multiple child components by moving it to their closest common parent. This ensures a single source of truth for the state and allows for coordinated updates. 

        import React, { useState } from 'react';

        // Child component: Displays the count and has a button to increment it
        function CounterDisplay({ count, onIncrement }) {
            return (
                <div>
                    <h2>Count: {count}</h2>
                    <button onClick={onIncrement}>Increment</button>
                </div>
            );
        }

        // Parent component: Manages the shared state (count)
        function App() {
            const [count, setCount] = useState(0);

            const handleIncrement = () => {
                setCount(prevCount => prevCount + 1);
            };

            return (
                <div>
                    <h1>Lifting State Up Example</h1>
                    {/* Pass the state and the update function as props to child components */}
                    <CounterDisplay count={count} onIncrement={handleIncrement} />
                    <CounterDisplay count={count} onIncrement={handleIncrement} />
                </div>
            );
        }

        export default App;

15. What is children prop in react?
        n React, props.children is a special prop that allows a component to accept and render any content placed between its opening and closing JSX tags, enabling flexible and reusable components by passing in anything from simple text and other React components to entire arrays or structures. This is a fundamental concept for component composition, allowing developers to create generic containers or layout components that can be customized with specific content by the parent component that uses them.  
        // Parent Component
        function Layout({ children }) {
            return (
                <div className="layout-container">
                    <header>My App Header</header>
                    {children} {/* This is where the content from the parent is rendered */}
                    <footer>My App Footer</footer>
                </div>
            );
        }

        // Usage of the Layout component
        function App() {
            return (
                <Layout>
                    <h1>Welcome to the page!</h1> {/* This text is passed as props.children */}
                    <p>This is some content within the layout.</p> {/* This paragraph is also part of props.children */}
                </Layout>
            );
        }
16. What is defaultProps in react?
17. What are fragments in react and its advantages?
        React Fragments are a feature in React that allows you to group multiple elements from a component's render method without adding an extra node to the DOM. Traditionally, if a component needed to return multiple elements, they had to be wrapped in a single parent element like a <div>. Fragments eliminate this requirement. 
        function MyComponent() {
            return (
                <React.Fragment>
                <h1>Title</h1>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
                </React.Fragment>
            );

            or 

            <>
                <h1>Title</h1>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
            </>
        }
18. How to use styling in react js?
19. How can you conditionally render components in react?
        1. If/Else Statements:
            function Greeting({ isLoggedIn }) {
                if (isLoggedIn) {
                    return <h1>Welcome back!</h1>;
                } else {
                    return <button>Login</button>;
                }
            }
        2. Ternary Operator (Conditional Operator):
            function Greeting({ isLoggedIn }) {
                return (
                    <h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>
                );
            }

        3. Logical AND Operator (&&):
            function Notification({ hasNotifications }) {
                return (
                    <div>
                        {hasNotifications && <p>You have new notifications!</p>}
                    </div>
                );
            }
        4. Element Variables:
            function UserPanel({ userRole }) {
                let panelContent;
                if (userRole === 'admin') {
                    panelContent = <AdminDashboard />;
                } else if (userRole === 'editor') {
                    panelContent = <EditorTools />;
                } else {
                    panelContent = <UserProfile />;
                }

                return <div>{panelContent}</div>;
            }

        5. Switch Statements:
            function ModeSwitcher({ mode }) {
                switch (mode) {
                    case 'edit':
                    return <EditMode />;
                    case 'view':
                    return <ViewMode />;
                    default:
                    return <DefaultMode />;
                }
            }
20. How to render list of data in react?
21. What is key prop?
22. Why indexes for keys are not recommended?
23. How to handle buttons in react? 
24. How to handle inputs in react?
25. Explain lifecycle methods in react.
26. What are the popular hooks in react and explain it's usage?
27. What is useState and how to manage state using it?
28. What is useEffect hook and how to manage side effects?
29. How to implement data fetching in reactjs?
    -> 29.A. How to manage loading state?
30. What is prop drilling and how to avoid it? (OR) What is Context API and why we need Context API?
31. What is the Context API in react and why is it used?
32. How do you consume context using the useContext hook?
33. How can you update context values?
        // Parent Component
        function App() {
        const [theme, setTheme] = useState('light');

        return (
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <ChildComponent />
            </ThemeContext.Provider>
        );
        }

        // Child Component
        function ChildComponent() {
            const { theme, setTheme } = useContext(ThemeContext);

            const toggleTheme = () => {
                setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
            };

            return <button onClick={toggleTheme}>Toggle Theme</button>;
        }
34. How do you use multiple Contexts in a single component?
35. What are the advantages of using the Context API over prop drilling?
36. What is the useReducer hook, and when should you use it?
        'useReducer' is basically an alternative of 'useState'. 'useState' basically used for state management.
        'dispatch' will dispatch a method. It has 'type' property.
        The useReducer hook in React is a tool for managing complex state logic within a component, acting as an alternative to useState. It takes a reducer function and an initial state, and returns the current state and a dispatch function to trigger state changes through actions. You should use useReducer when state is complex, has multiple sub-values, or when the next state depends on the previous one, such as with complex forms or data fetching. 
37. Can you use useReducer with complex state objects?
38. How do you pass additional arguments to the reducer function?
# Intermediate level of interviews
39. How do you handle side effects with useReducer?
40. What is useRef hook?
41. How can useRef be used to store mutable values?
42. What is forwardRef and when would you use it?
43. How to manage forms in react?
44. What are Custom Hooks and Why do we need them?
45. Implement useFetch custom hook/ Custom hook example?
46. Implement useWindowResize custom hook
47. What is React Router DOM and why is it used?
48. How do you create a basic route in React Router DOM?
49. How to implement basic routing using react router dom?
50. How to create a link to another route using React Router DOM?
51. How do you use URL parameters / Dynamic routing in React Router DOM?
52. How can you perform a redirect in React Router DOM?
53. What is a Routes component in React Router DOM?
54. How do you handle nested routes in React Router DOM?
55. How can you handle 404 errors(not found) in React Router DOM?
56. How do you programmatically navigate using React Router DOM?
57. Explain useCallback hook with example
58. Explain useMemo hook with example
59. Explain React.memo with example
60. Explain the reconciliation process in React and how it works.
61. What are Pure components?
        Pure components are like pure functions: they consistently produce the same output for the same input and don't have side effects. In software development, especially in frameworks like React, this means they will always render the same output given the same props and state, and they don't modify any data outside their own scope. This characteristic makes them predictable and allows for performance optimizations, as the component can skip re-rendering if the input (props and state) hasn't changed. 
62. Explain higher order component with example.
63. What is redux, explain core principles.
64. What are actions in Redux, explain with example?
65. Explain reducers in Redux with an example.
66. What is the role of the Redux store?
67. How do you connect React components to Redux store using connect?
68. How do you use the useSelector and useDispatch hooks in a function React component?
69. What is Redux Toolkit?
70. How to configure store in redux toolkit?
71. Explain createSlice in Redux Toolkit with an example.
72. What are controlled components in React?
73. What are uncontrolled components in React?
74. How do you optimize performance in React applications?
75. What is code splitting in React?
76. What are render props in React? Give an example
        Render props in React are a pattern where a component's prop is a function that returns a React element. This function is called by the component to dynamically render its UI based on its internal state or props, enabling the sharing of logic between components without tight coupling.
77. What are portals in React?
        In React, Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. While the component is logically part of the React component tree and maintains its React context and event bubbling behavior, its rendered output is physically placed in a different part of the DOM. 
        Modals and Dialog Boxes, Tooltips and Popovers, Hovercards, Loaders and Notifications
78. How do you implement lazy loading in React?
79. How do you define props for a functional component in TypeScript?
80. How do you use the useState hook with TypeScript?
81. How do you type event handlers in React with TypeScript?
82. How do you handle optional props in React components with TypeScript?
83. How do you use the useReducer hook with TypeScript?
84. How do you type the context API in React with TypeScript?
85. How do you write a simple test in Jest
86. How do you render a component for testing using React Testing Library
87. How can you find elements in the DOM using React Testing Library?
88. How do you simulate user events in React Testing Library?
89. How can you test component props with React Testing Library?
# Hands-on Questions
90. Create a Controlled Input Component
91. Implement toggle Visibility of a Component
92. Fetch Data from an API and Display it, along with loading state.
93. Create a Reusable Button Component with Props
94. Build a Component that Uses an Effect to Perform Cleanup
95. Implement a Context with a Reducer for Global State Management
96. Build a Component with Conditional Rendering Based on Props
97. Implement a simple form component