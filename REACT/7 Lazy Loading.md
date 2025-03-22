# What is Lazy
    When we are building a large-scaled application, it is important to break it down into different components (Bundles).  

    Having a single bundle will make our app slower since a single bundle will contain all the code of the application which 
    takes a lot of time to load.  

    The solution for this is to split our app into smaller chunks (bundles). This process is known as below terms:  
    1. Chunking  
    2. Code Splitting  
    3. Dynamic Bundling  
    4. Lazy Loading  
    5. On demand loading  

    For example, if we are developing an e-commerce application. This ecommerce app will have a cart which will contain different 
    functionalities.  

    So we can create a separate bundle for the Cart component. 

    This bundle will not be loaded initially. It will be loaded only when the user visits the cart page. 

    That means, with this approach the app will have 2 bundles. One would be a normal bundle which contains all the code of the 
    app except for the cart component. This bundle will be loaded when the user visits our app.  

    The other bundle will contain the code of the cart component which will be loaded only when the user visits the shopping cart.  
    That is why this process is also known as 'on demand  loading'. 

# When and why do we need lazy() ? 
    ● In simpler terms, lazy loading is a design pattern. 
    ● It allows you to load parts of your application on demand to reduce the initial load time. 
    ● For example, you can initially load the components and modules related to user login and registration. 
        Then you can load the rest of the components based on user navigation.
    ● You might not feel much difference when using lazy loading for small-scaled applications. But it significantly 
        impacts large scaled applications by reducing the initial load time. 
    ● Ultimately it improves both the use experience and application performance. 

# Advantages of Lazy loading 
    1. Reduces the initial load time by reducing the bundle size.  
    2. Reduces browser workload.  
    3. Improves application performance in low-band width situations.  
    4. Improves user experience at initial loading.  
    5. Optimizes resource usage. 

# Disadvantages of lazy loading 
    1. Not suitable for small scale applications.  
    2. Placeholder can slow down quick scrolling.  
    3. Requires additional communication with the server to fetch resources.  
    4. Can affect SEO and ranking. 

# Example 
    // Witout Lazy Loading
        import About from './About';

    // With Lazy Loading i.e React.lazy()
        const About = React.lazy(() => import('./About));

    ● When we use lazy() on a component which fetches the API response, React can give us an error i.e. 
        'A component suspended while responding to synchronous input'. 
    ● To avoid or handle this error, React offers a component i.e. 'Suspense'. 

# Suspense 
    ● Suspense is a built-in React component which lets you temporarily render a fallback UI while its children are still loading. 
    ● If a component tries to retrieve the API response, while it does that, we can show a fallback UI to the user until we get 
        the API response. 
    ● This fallback UI could be a shimmer UI as well. 
    ● We can just wrap the lazy loaded component inside the <Suspense> component. 
    ● This <Suspense> component has a property i.e. fallback which takes the component which must be rendered until we get the 
        API response in this case.

    // Without Lazy Loading
        import About from './About';

    // With Lazy Loading
        const About = React.lazy(() => import('./About'));

        <Suspense fallback={<Loading />}>
            <About />
        </Suspense>

# When and why do we need Suspense ? 
    ● Suspense is best used when you want to display a fallback while waiting for something to load. 
    ● The two main use cases for this are when you are waiting for data to be fetched from an API after the initial page load 
        and when you are lazy loading other React components.