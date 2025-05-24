# Lazy Loading (Code Splitting):
    I use React.lazy() and Suspense to implement lazy loading of components. This allows me to 
    split code at the component level and load parts of the UI only when needed, reducing the 
    initial bundle size.
    Example:

    const LazyComponent = React.lazy(() => import('./MyComponent'));

# Asset Optimization:
    During the build process, I ensure that JS and CSS files are minified and compressed using 
    tools like Webpack or Vite. I also optimize images using next/image (in Next.js) or libraries 
    like react-image, and serve them in modern formats like WebP.

# Writing Optimized Code:
    In React, I avoid unnecessary re-renders by:
    1. Using React.memo for functional components.
    2. Using useCallback and useMemo to memoize functions and values.
    Managing state effectively by lifting state up only when necessary and minimizing global state.
    Example:

        const memoizedCallback = useCallback(() => {
        doSomething(a, b);
        }, [a, b]);

# Bundler (Webpack/Vite):
    I configure Webpack to do:
    1. Tree shaking (removing unused code)
    2. Code splitting via dynamic imports
    3. Compression plugins (like CompressionWebpackPlugin)
       This helps deliver only the required code to the browser.

# CDN / Server-Level Optimization:
    I host static assets on CDNs like Cloudflare or AWS CloudFront to reduce load times. On the 
    server side, I ensure that gzip or Brotli compression is enabled and implement cache-control headers 
    for static assets.

# Rendering of Components:
    I follow best practices like:
    1. Using keys correctly in lists
    2. Avoiding unnecessary parent-child re-renders
    3. Implementing virtualization for long lists using react-window or react-virtualized
    4. Using shouldComponentUpdate in class components or React.memo in functional ones.
    Example:

    const ListItem = React.memo(({ item }) => <div>{item.name}</div>);

# Monitoring and Profiling:
    I use the React DevTools Profiler to identify performance bottlenecks in component rendering. 
    I also use Lighthouse and Web Vitals to measure metrics like FCP (First Contentful Paint) and 
    TTI (Time to Interactive) and optimize based on those insights.