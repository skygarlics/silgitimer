import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import TimerScreen from 'Screens/timer';
import CaseScreen from 'Screens/case';
import Top from 'Screens/Top';
import EditorScreen from 'Screens/editor';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Top} />
        <Route path="/timer" component={TimerScreen} />
        <Route path="/case" component={CaseScreen} />
        <Route path="/editor" component={EditorScreen} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
