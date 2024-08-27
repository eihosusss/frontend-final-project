import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BookingPage from './pages/BookingPage';
import BookingConformationPage from './pages/BookingConformationPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <h1>About Us</h1>,
  },
  {
    path: "/menu",
    element: <h1>Our Menu</h1>,
  },
  {
    path: "/reservations",
    element: <BookingPage />,
  },
  {
    path: "/order-online",
    element: <h1>Order Online</h1>,
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/reservations-conformation",
    element: <BookingConformationPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
