import { useDispatch, useSelector } from 'react-redux';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Audio } from "react-loader-spinner";
import s from './App.module.css';

import { authOperations, authSelectors } from './redux/auth';



export default function App() {
  
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  
  const HomeView = lazy(() =>
    import('views/HomeView.js' /* webpackChunkName: "HomeView" */),
  );
  const RegisterView = lazy(() =>
    import('views/RegisterView.js' /* webpackChunkName: "RegisterView" */),
  );
  const LoginView = lazy(() =>
    import('views/LoginView.js' /* webpackChunkName: "LoginView" */),
  );
  const ContactsView = lazy(() =>
    import('views/ContactsView.js' /* webpackChunkName: "ContactsView" */),
  );

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Audio
          heigth="300"
          width="300"
          color='grey'
          arialLabel='loading'/>
      ) : (
      <>
      <AppBar />

      <Suspense fallback={
        <Audio
          heigth="300"
          width="300"
          color='grey'
          arialLabel='loading'/>
      }>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsView />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense></>)}
    </Container>
  )
}