# Testing in React:
    Testing in React is essential to ensure components behave as expected. It involves verifying 
    UI rendering, user interactions, and component logic. We typically use Jest as the test runner 
    and assertion library, and React Testing Library (RTL) for testing components from the user’s perspective.

# React Testing Library:
    React Testing Library encourages good testing practices by focusing on how users interact with 
    the application rather than the implementation details. It uses queries like getByText, 
    getByRole, or findByTestId to select elements, simulating real user behavior.

## code
    import { render, screen, fireEvent } from '@testing-library/react';
    import MyButton from './MyButton';

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<MyButton onClick={handleClick} />);
        fireEvent.click(screen.getByText(/click me/i));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

# Unit Testing:
    Unit testing involves testing small, isolated pieces of logic (like functions or methods) to 
    ensure they work correctly. In React, this can mean testing utility functions, reducers, or 
    individual components.

## Code
    // utils.js
    export const add = (a, b) => a + b;

    // utils.test.js
    import { add } from './utils';
    test('adds two numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

# Emphasize writing testable code and demonstrate test cases.
## Code 
    Testable Component

    // Counter.jsx
    import React, { useState } from 'react';

    const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
        <h2 data-testid="counter-value">Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
    };

    export default Counter;


    Testcase using RTL

    // Counter.test.jsx
    import { render, screen, fireEvent } from '@testing-library/react';
    import Counter from './Counter';

    test('increments counter when button is clicked', () => {
        render(<Counter />);
        
        // Check initial value
        expect(screen.getByTestId('counter-value').textContent).toBe('Count: 0');

        // Click the button
        fireEvent.click(screen.getByText(/increment/i));

        // Check updated value
        expect(screen.getByTestId('counter-value').textContent).toBe('Count: 1');
    });

