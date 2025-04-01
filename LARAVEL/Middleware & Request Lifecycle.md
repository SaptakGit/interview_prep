# Request Lifecycle
    step 1. The request first goes to public/index.php and load our application
    step 2. Then the composer generated files are loaded
    step 3. Then the instances of our app are created
    step 4. Then it goes either http Kernel(for web work) or Console Kernal(for scheduled work)
    step 5. Then request goes to service providers which inpmelents our laravel core functionalities
    step 6. Then it goes to route
    step 7. Then middleware (if any)
    step 8. Then controller
    step 9. Then it goes to view

# Middleware
