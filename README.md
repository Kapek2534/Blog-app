# Blog-app

**Blog-app** is a React-based frontend application for browsing, creating, and managing blog posts. It demonstrates the use of modern frontend tools and libraries and is fully integrated with a backend via REST API.

## Technologies and Tools Used

- **Vite** - Next-generation frontend tooling and fast build system
- **React** – Component-based UI development
- **React Router** – Routing and view separation
- **React Hook Form** – Form handling and validation
- **Framer Motion** – Smooth animations and transitions
- **CSS** – Styling the application by CSS modules
- **Fetch API** – HTTP requests to interact with the backend:
  - `GET` – Displaying posts and favorite posts
  - `POST` – Adding new posts via a form
  - `DELETE` – Removing posts from favorites
- **React Context API** – Light/Dark mode theme switching using `useContext`

## Functionality Overview

- **Main Page View** - Homepage view from which you can access other subpages (views)
- **Post List View** – Fetches and displays all blog posts from the backend
- **Favorites View** – Displays user-selected favorite posts
- **About Blog View** - Static view describing the blog with image and text
- **Create Post Form** – Allows users to add new blog posts via a form in Post List view
- **Delete from Favorites** – Users can remove posts from their favorites
- **Loaders & Actions** – Used for data fetching and mutations with React Router
- **Dark/Light Mode Toggle** – Switch between dark and light themes using a global context

## Application Structure

The application is divided into multiple views managed by **React Router**. Each view is connected to backend endpoints using **loaders** (for preloading data) and **actions** (for handling form submissions or mutations). Transitions and UI enhancements are handled using **Framer Motion**, and all form logic is managed through **React Hook Form**. Theme state is managed globally via **React Context** to support a dark and light mode toggle.

## Deployment and Hosting

The backend runs separately on a server hosted by Render, so **no local backend setup or installation is required** to run the frontend.  
The frontend is deployed and hosted on **GitHub Pages**, making it publicly accessible via a URL.

Simply open the frontend URL in your browser — no installation or server configuration is needed to browse or interact with the blog.

## Theme Support

Users can switch between light and dark themes. The selected mode is managed using `React Context` (`useContext`), allowing consistent theming across all components.


