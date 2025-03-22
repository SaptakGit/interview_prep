# What is a custom hook ? 
    ● A hook is nothing but a utility function. 
    ● Hooks are reusable functions. 
    ● When you have component logic that needs to be used by multiple components, 
        we can extract that logic to a custom hook. 
    ● A custom hook in React is a JavaScript function that allows you to extract and reuse logic 
        involving stateful behavior and side effects from function components. 
    ● Custom hooks enable you to encapsulate common logic in a way that can be shared across multiple 
        components, promoting code reuse and better organization. 
    ● Why use custom hooks ? 
        a. Code Reusability: Custom hooks allow you to reuse stateful logic across different 
            components without duplicating code. 
        b. Cleaner Components: By extracting complex logic into custom hooks, you can keep your 
            components smaller and more focused on rendering. 
        c. Separation of Concerns: Custom hooks help separate the logic from the UI, making your 
            code easier to manage and understand.


    // Code

        import React, { useState, useEffect } from "react"

        const Home = () => {

            const [itemDetails, setItemDetails] = useState(null);
            const [error, setError] = useState(null);

            const fetchData = async (url) => {
                try{
                    const data = await fetch(url);
                    if(!data.ok){
                        then new Error("Throw new error");
                    }
                    const response = await data.json();
                    setItemDetails(response)
                } catch(err){
                    setError(err);
                }
            }
            
            useEffect(() => {
                fetchData("heeep://example.com");
            },[])

            return(
                <div>
                    <div>
                    /* displaying the data*/
                    <h1>{itemdetails.name}</h1>
                    <span>{error}</span>
                    </div>
                </div>
            )
        }

        export default Home

    Above is the component which performs 2 tasks:  
        1. Fetch data from the API  
        2. Display data on the webpage 
    We can have this component only to display the data on the web page and can create a custom hook which fetches the data.

# Our Custom Hook 

    // Our Custom Hook Code

        import React, { useState, useEffect} from "react";

        const useDemo = () => {

            const [itemDetails, setItemDetails] = useState(null);
            const [err, setError] = useState(null);

            const fetchData = async (url) =>{
                try{
                    const data = await fetch(url);
                    if(!data.ok){
                        then new Error("Throw new error");
                    }
                    const response = await data.json();
                    setItemDetails(response);
                }catch(err){
                    setError(err);
                }
            };

            useEffect(() => {
                fetchData("https://example.com")
            },[];)

            return itemDetails;
        }

        export default useDemo();

    // Our Home Component Code

        import React from "react";
        impoer useDemo from "./useDemo"

        const Home = () => {
            const { itemDetails } = useDemo();

            return(
                <div>
                    <div>
                    /*Displaying the Data*/
                    <h1>{itemdetails.name}</h1>
                    </div>
                </div>
            )
        }

        export default Home


    ● In the above example, I have moved the logic of fetching data into a custom hook i.e.  useDemo. 
    ● Then I imported the custom hook useDemo into the Home component and used destructuring to get the itemDetails which is 
        returned from the useDemo() hook. 
    ● Because of this, my Home component only has one responsibility which is to display the data. 
    ● The Home Component became clean since all the logic of fetching data is now moved into the custom hook.

# Create a custom hook to see if the user is online or offline

    // Custom Hook Code

        import React, {useState, useEffect} from "react"

        const useOnlineStatus = () => {
            const [isOnline, setIsOnline] = useState(true);

            useEffect(() => {
                window.addEventListener("offline",() => {
                    setIsOnline(false);
                });

                window.addEvemtListener("online",() => {
                    setOnline(true);
                })

                return isOnline;

            }, [])
        }

        expoer default useOnlineStatus;

    The above hook checks if the user is online or offline using the window object and the callback function sets the value of 
    isOnline and the hook then returns the value.
    This value can be extracted into another component by importing the useOnlineStatus() hook in it. 

# Why should we name our hook as “useOnlineStatus” ? 
    ● It is a naming convention for custom hooks which is followed by most of the companies. 
    ● A lot of companies use a linter which throws an error if the custom hooks are not named like this. 
    ● It is a good practice to use the word  "use"  while naming the custom hook. 
    ● If someone else sees the code, they will get to know that this is not a normal function but a React hook.
