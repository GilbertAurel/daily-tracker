import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import HomePage from 'pages/home';
import CommunityPage from 'pages/community';
import CollectionsPage from 'pages/collections';
import ProfilePage from 'pages/profile';

const router: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={HomePage} />
      <Route path="/community" component={CommunityPage} />
      <Route path="/collections" component={CollectionsPage} />
      <Route path="/c" component={ProfilePage} />
    </Switch>
  </Router>
);

export default router;
