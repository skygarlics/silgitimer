import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import TimerScreen from 'Screens/timer';
import CaseScreen from 'Screens/case';
import Top from 'Screens/Top';
import EditorScreen from 'Screens/editor';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { AlarmOn, CheckCircleOutline, Edit } from '@material-ui/icons';
import { useState } from 'react';



const Router = () => {

  const [value, setValue] = useState(0);
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Top}>
      </Route>
      <Switch>
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
