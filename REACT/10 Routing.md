# Routing (Role-based Access Control - RBAC):
    Routing with RBAC involves controlling access to different routes based on user roles (e.g., admin, user, guest).

    Implementation Steps:

    1. Store the user’s role after login (e.g., in context, Redux, or localStorage).

    2. Define route access permissions for each role.

    3. Use a wrapper or higher-order component (HOC) to check if the user has the required role before rendering a route.
    Example:

        const ProtectedRoute = ({ allowedRoles, children }) => {
            const { user } = useAuth(); // Custom hook
            return allowedRoles.includes(user.role) ? children : <Navigate to="/unauthorized" />;
        };

# react-router:
    react-router is a library used in React to enable client-side routing. It allows you to:

    Define routes for different components/pages.

    Navigate between routes without refreshing the page.

    Use features like dynamic routing, nested routes, route protection, and query parameters.
    Key Components:
    <BrowserRouter>, <Routes>, <Route>, <Link>, <Navigate>

# How do you manage protected routes?
    Protected routes require user authentication (and optionally authorization).
    Implementation:

    Create a component that checks if the user is authenticated.

    If not, redirect to login or an error page.
    Example:

        const PrivateRoute = ({ children }) => {
            const { isAuthenticated } = useAuth();
            return isAuthenticated ? children : <Navigate to="/login" />;
        };

# How do you handle routes?
    You handle routes by:

    1. Wrapping your app with <BrowserRouter>.

    2. Defining paths and components using <Routes> and <Route>.
    Example:

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>


# Query Params:
    Query parameters provide additional data in the URL after ?, e.g., /search?q=react.
    Use in React Router:

    Use useSearchParams hook to read query params.

        const [searchParams] = useSearchParams();
        const query = searchParams.get("q");

# Dynamic Routing:
    Dynamic routing creates routes based on data, such as user profiles or product IDs.
    Example Route:
        <Route path="/user/:userId" element={<UserProfile />} />
    Access param in component:
        const { userId } = useParams();




