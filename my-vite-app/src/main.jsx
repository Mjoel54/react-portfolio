import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import AboutMe from './AboutMe.jsx'
import Portfolio from './Portfolio.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <AboutMe />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);