import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import BookingPage from './pages/BookingPage';
import BookingConformationPage from './pages/BookingConformationPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import LoginPage from './pages/LoginPage';
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
    element: <AboutPage />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/reservations",
    element: <BookingPage />,
  },
  {
    path: "/order-online",
    element: <OrderOnlinePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/reservations-confirmation",
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
