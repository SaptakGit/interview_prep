# Higher Order Components 
    ●   Higher order component is a function that takes a component and  returns a component. 
    ●   It takes a component as an input, enhances that component, adds  some features into it 
    and returns the component. 
    ●   Higher order components are pure functions because they do not  change the existing behavior 
    of the input component

# code

    import React from "react"

    // This is Higher Order Component (HOC)
    function withGreetings(WrappedComponent){
        return(
            function WithGreetings(props){
                return(
                    <div>
                        <h1>Hi...</h1>
                        <WrappedComponent {...props}>
                    </div>
                )
            }
        )
    }

    // This is a simple component that will enhance with HOC
    function MyComponent(){
        return(
            <div>Saptak</div>
        )
    }

    // We create a component by applying HOC to the simple component
    const EnhancedComponent = withGreetings(MyComponent)

    App(){
        return(
            <div className="App"> 
                <EnhancedComponent />
            </div>
        )
    }

    export default App