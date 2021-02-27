import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

import { loadUser } from "./actions/auth";

import Navbar from "./components/layout/Navbar.js";
import Landing from "./components/layout/Landing.js";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import Alert from "./components/layout/Alert.js";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import ProfilesList from "./components/profiles/ProfilesList";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";

import setAuthToken from "./utils/setAuthToken";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // const dispatch = useDispatch();
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Alert />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/community" component={ProfilesList} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <PrivateRoute
            exact
            path="/add-experience"
            component={AddExperience}
          />
          <PrivateRoute exact path="/add-education" component={AddEducation} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/post/:id" component={Post} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
