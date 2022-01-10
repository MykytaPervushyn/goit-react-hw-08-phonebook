// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './components/AppBar/AppBar';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';
// import { useFetchContactsQuery, } from './redux/contacts/contactsSlice';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Audio } from "react-loader-spinner";
import s from './App.module.css';

import { authOperations, authSelectors } from './redux/auth';



export default function App() {
//   const [filter, setFilter] = useState('');

//   const { data: contacts, isFetching } = useFetchContactsQuery();
//   console.log(contacts);

//   const getFiltredContacts = data =>
//     data.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     );

//   const handleChange = e => {
//     setFilter(e.target.value)
//   }
  
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
      {/* <h1>Phonebook</h1>
      <ContactForm contacts={contacts}/>
      <h2>Contacts</h2>
      <Filter onChange={handleChange} />
      {!isFetching && <ContactList contacts={getFiltredContacts(contacts)}
      />} */}
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