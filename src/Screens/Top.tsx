import BottomTab from 'Components/BottomTab';
import * as React from 'react';

import { Link, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}
const Top = ({ match, history, location }: Props) => {
  
    return (
    <div>
        <h1> TOP PAGE </h1>
        <Link to="/timer">Timer </Link>
        <Link to="/case">CASE </Link>
        <Link to="/editor">Editor</Link>
    </div>
  );
};

export default Top;
