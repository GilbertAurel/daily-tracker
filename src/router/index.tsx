import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from 'pages/home';

const router: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
);

export default router;
