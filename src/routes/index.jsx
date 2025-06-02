import React from 'react';

import {
    createBrowserRouter,
  } from "react-router-dom";
import { HomeLayout } from '../layouts/home-layout';
import { LoginPage } from '../pages/login-page';
import { RegisterPage } from '../pages/register-page';

export const router = createBrowserRouter([
    {
      path: "/home",
      element: <HomeLayout />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);