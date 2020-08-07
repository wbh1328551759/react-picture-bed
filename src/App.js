import React, {Suspense, lazy} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'

const Home = lazy(() => import('./pages/Home'))
const History = lazy(() => import('./pages/History'))
const About = lazy(() => import('./pages/About'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))


function App() {
  return (
    <>
      <Header/>
      <main>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/history">
              <History/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer/>
    </>
  );
}

export default App;
