import React, { createContext, useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import HomeRoute from './components/HomePage/HomeRoute/HomeRoute';
import AdminRoute from './components/AdminPage/AdminRoute/AdminRoute';
import Login from './components/Auth/Login/Login';
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from './components/Auth/ProtectedRoute/ProtectedRoute';
import ServiceDetails from './components/HomePage/ServiceDetails/ServiceDetails';


export const userContext = createContext();

const App = () => {
  const [userInfo, setUserInfo] = useState({})
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <userContext.Provider value={[userInfo, setUserInfo, isAdmin, setIsAdmin]}>
      <ThemeProvider theme={theme}>
        <Switch>
          <ProtectedRoute path="/dashboard">
            <AdminRoute />
          </ProtectedRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <HomeRoute />
          </Route>
          <Route path="/service">
            <ServiceDetails />
          </Route>
          <Route path="*">
            <h1 style={{ color: "red", textAlign: "center" }}>Page nOt FoUnd</h1>
          </Route>
        </Switch>
      </ThemeProvider>
    </userContext.Provider>
  )
}
export default App;
