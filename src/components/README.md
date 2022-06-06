# This directory contains files for the components of the main App.

1. Direction.jsx contains the routes for different sections of the Googol App. Routing is done using `react-router-dom`.
2. Footer.jsx contains text and code for the footer of the App.
3. Links.jsx uses NavLink and react-router-dom to link through different sections of the App.
4. Loading.jsx uses `react-loader-spinner` to create a loader, in this instance and Infinity Spinner was used.
5. Navbar.jsx contains code for the navigation bar and the option to change from light to dark mode.
6. Results.jsx uses the Context Provider and Google Search API to display options based on inout from the user. Results are rendered based on Text Search, Images, Videos, News.
7. Search.jsx utilises the search bar option and uses `use-debounce` to load search results based on text input after 300 ms to make fewer requests and display search results faster.
