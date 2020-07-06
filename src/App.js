import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.css'
import allActions from './stores/actions/index';
import Navbar from './components/Navbar';
import AddEvent from './views/AddEvent';
import Home from './views/Home';
import Dashboard from './views/Dashboard'
import ErrorPage from './components/ErrorPage'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allActions.setEvents('http://localhost:3000/events'))
  }, [dispatch])
  const events = useSelector((state) => state.events.events)
  const loading = useSelector((state) => state.events.loading)
  const error = useSelector((state) => state.events.error)
  if (loading){
    return <div className="container"> <h2>Loading.....</h2> </div>}
  if (error) {
    return (
      <Router>
        <Navbar />
        <ErrorPage />
      </Router>
    )
  }
  return (
    <Router>
        <ReactNotification />
        <Switch>
          <Route path="/addevent">
            <Navbar />
            <AddEvent events={events} />
          </Route>
          <Route path="/dashboard" >
            <Navbar />
            <Dashboard events={events} />
          </Route>
          <Route path="/">
            <Navbar />
            <Home events={events} />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
