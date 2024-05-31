# PRODUCT-SEARCH-MELI

<p align="right">
  <img height="200" src="https://example.com/path/to/your/logo.png" alt="Project Logo" />
</p>

PRODUCT-SEARCH-MELI is a web application that allows users to search for products using the Mercado Libre API. Built with React, TypeScript, and Vite, it provides a minimal setup with HMR (Hot Module Replacement) and some ESLint rules.

## Frontend

### Tech stack

- TypeScript
- React
- React Router
- SCSS 
- TailwindCSS
- ESLint
- Vite

**Framework:** Vite.

### Scripts

- `npm install` for dependencies
- `npm run dev` for development environment
- `npm run build` to create production build
- `npm run test` to create production build

### Features

- **Product Search:** Allows users to search for products using the Mercado Libre API.
- **Product List:** Allows users to search for products using the Mercado Libre API and lists them in groups of 4 items, displaying basic product features.
- **Product Details:** View detailed information about each product.
- **Responsive Design:** Ensures a seamless experience across various devices.
- **Route Protection:** Added route protection to secure certain parts of the application.
- **Empty State Modals:** Implemented modals to display when there are no search results or other empty states.
- **Error Boundaries:** Added local and production error boundaries to gracefully handle and display errors.
- **Testing:** Implemented tests to ensure the reliability and correctness of the application.

## Backend

### Tech stack

- TypeScript
- Node.js
- Express
- Supertest

### Scripts

To run the backend server, navigate to the `src/api` directory and open a terminal, then execute the following commands:

- `npm install` for dependencies
- `npm run dev` for development environment with nodemon

### Features

- **REST API:** Implements a RESTful API architecture.
- **Product Endpoints:** Fetch product data from the Mercado Libre API.
- **Testing:** Implemented tests to ensure the reliability and correctness of the application.

### Endpoints

- **User:**
  - `/api/items` GET: Fetch all products from API.
  - `/api/items?id` GET: Fetch specific product detail from API.



## License

MIT License.

_For more details, visit the [GitHub repository](https://github.com/mariomartinez81/PRODUCT-SEARCH-MELI)._
