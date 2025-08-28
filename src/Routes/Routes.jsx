import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/Order/Order';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import Secret from '../pages/Home/shared/Secret/Secret';
import ContactUs from '../pages/ContactUs/ContactUs';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/menu',
                element: <Menu></Menu>,
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
            {
                path: '/contactus',
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            }
        ]
    }
])