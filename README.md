# React + Vite Project

Welcome to the React + Vite project! This setup provides a fast and efficient way to build React applications with Vite, featuring Hot Module Replacement (HMR) and a basic ESLint configuration.

## Features

- **Fast Development**: Lightning-fast builds and HMR with Vite.
- **React Ready**: Pre-configured for React.
- **Code Quality**: Includes basic ESLint rules.
- **Plugin Options**:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Quick Start

1. **Clone and Navigate**:

   ```bash
   git clone <repository-url> && cd vite-project
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the App**:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser.

4. **Build for Production**:

   ```bash
   npm run build
   ```

5. **Preview Build**:
   ```bash
   npm run preview
   ```

## About the Movie List

This project includes a simple movie list feature where you can:

- View a list of movies with their titles and release dates.
- Add new movies to your favorites list.
- Remove movies from the favorties list.
- Search for movies by title.

The movie list is managed using React state, ensuring a dynamic and responsive user experience.

---

Happy coding!
