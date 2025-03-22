React is fast because it is doing Efficient DOM manupulation.

# Virtual DOM 
    Representation of an actual DOM. It is besically the React Elements,the object which is given by React by createElement.

# Reconciliation in React 
    Whenever there is change in UI it is known as Reconciliation.
    ● The React reconciliation process is the engine behind its efficient updates. 
    ● When the state of a component changes, React needs to determine what updates are necessary to the Real DOM, which is where 
        the reconciliation process comes into play. 
    ● Reconciliation is React’s way of diffing the virtual DOM tree with the updated virtual DOM to determine the most efficient 
        way to update the real DOM. 
    ● This process allows React to apply only the necessary changes to the DOM, avoiding the costly operation of updating the entire DOM tree. 
    ● The reconciliation algorithm is designed to optimize this process, ensuring that the minimum number of operations are performed 
        leading to potential performance.

# What is React fiber ? 
    ● React fiber is a re-implementation of React's core algorithm, designed to enhance the user interface’s responsiveness and renderability. 
    ● The term fiber refers to a unit of work, a fundamental concept in fiber architecture. 
    ● The React team introduced React fiber to improve the reconciliation phase of the React application, making it more efficient and effective. 
    ● React fiber is not a feature but an ongoing implementation of React’s reconciliation algorithm. 
    ● The React fiber reconciler, a critical part of the fiber architecture, is responsible for updating the user interfaces. 
    ● It does this by comparing the tree with the work in progress tree.

# Renders: 
    The process of updating the virtual DOM.

# Diff Algorithm 
    It find out the differance between two virtual DOM(Old Virtual DOM and updated virtual DOM) and updates only that portion of the DOM 
    which has been changed or updated.

# Incremental Rendering 
    The ability to split the rendering work in different chunks over multiple frames.

# How does render work? 
    Updating the UI based on virtual DOM changes.