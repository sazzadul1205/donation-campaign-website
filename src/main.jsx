// index.js (or wherever you define your routes)

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import DonationDetails from './Components/DonationDetails.jsx/DonationDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/donation',
        element: <Donation></Donation>, 
        loader: () => fetch('/card.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () =>  fetch('/card.json')
      },
      {
        path: '/donationDetails/:id',
        element: <DonationDetails></DonationDetails>,
        loader: ({ params }) => {
          const id = params.id;
          return fetch('../card.json')
            .then((response) => response.json())
            .then((data) => data.find((item) => item.id === parseInt(id, 10)));
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
