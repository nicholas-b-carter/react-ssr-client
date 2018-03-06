import React from 'react'
import App from './App'
import HomePage from './pages/home'
import AboutUs from './pages/about_us'
import SignInPage from './pages/signin'
import UsersPage from './pages/users'
import AdminsPage from './pages/admins'
import NotFoundPage from './pages/NotFound'
import requireAuth from './components/hoc/requireAuth'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AboutUs,
        path: '/about'
      },
      {
        ...SignInPage,
        path: '/signin'
      },
      {
        ...UsersPage,
        path: '/users'
      },
      {
        ...AdminsPage,
        path: '/admins'
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
