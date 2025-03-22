# Life Cycle of Class Based Component:
        When a Class Based Component is called First the constructor is called, then the render.
        If the parent is also a Class Beased Component then the calling be like...
        1st - Parent Constructor
        2nd - Parent Render
        3rd -- Child Constructor
        4th -- Child Render

        It has another Important method given by React called componentDidMount(). It is called after the Render, when the 
        component is alredy mounted on the web page.If the parent also have componentDidMount(), then the calling will be like...
        1st - Parent Constructor
        2nd - Parent Render
        3rd -- Child Constructor
        4th -- Child Render
        5th -- Child componentDidMount
        6th - Parent componentDidMount
        So besically when the child Life Cycle is completed completly then the Parent componentDidMount will be called.

        If it has multiple childern then the call will be like...
        1st - Parent Constructor
        2nd - Parent Render
        3rd -- 1st Child Constructor
        5th -- 1st Child Render
        6rd -- 2nd Child Constructor
        7th -- 2nd Child Render
        8th -- 1st Child componentDidMount
        8th -- 2nd Child componentDidMount
        9th - Parent componentDidMount
        **** React Life Cycle Diagram*** https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


        This happens because as shown in the above diagram React has two phase, “Render phase” and “Commit phase”. In 
        “Render phase” the constructor id called and render happen, and in “Commit phase” React updates the DOM and 
        componentDidMount happen.So when React sees there are multiple children it optimize and batch-up the “Render phase” 
        with all constructor and render. Then it moves to the  “Commit phase” with updateing the DOM and componentDidMount.


        componentDidMount() : 
            It is use to make API call.
            In Funcetion Based Components we use useEffect to call an API with a blank dependancy array so that it calls 
            the API only once and it work in "Loads --> Render --> API --> Re-Render" this model. 
            Similarly here also we call the API inside the componentDidMount() method so that first it renders the 
            besic detail, calls the API and re-render and follow the "Loads --> Render --> API --> Re-Render" process.

        componentDidUpdate():
            It calls after each update of the component.

        componentWillUnmount():
            It calls when we leave the page. It is use to clear function and calls when we leave the page or change the 
            component otherwise the component will run in background forever.

            same thig happen in useEffect also. If we create a function like setInterval() it will continiouly run behind 
            even if we change the componet.change the page. To handle this we use 
            retun () => {
                console.log('will call while leave page')
            }
            and write our clearing code inside it.