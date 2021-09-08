import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from 'pages/home';

const router: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/community" component={HomePage} />
      <Route path="/collections" component={HomePage} />
      <Route path="/c" component={HomePage} />
    </Switch>
  </Router>
);

export default router;
