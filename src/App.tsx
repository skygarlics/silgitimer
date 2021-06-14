import React from 'react';
import 'App.css';

import Router from 'Router';
import { CheckListContextProvider } from 'Contexts/CheckListContext'

function App() {
  return (
    <CheckListContextProvider>
        <Router />
    </CheckListContextProvider>
  );
}

export default App;
