import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {Store} from './app/Store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import RegistrationForm from './components/RegistrationForm.jsx'
import ThankYouPage from './components/ThankYouPage.jsx'
import User from './pages/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<HomePage />}/>
      <Route path='register' element={<RegistrationForm/>}/>
      <Route path='thank-you' element={<ThankYouPage/>} />
      <Route path='/user/:id' element={<User />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>,
)
