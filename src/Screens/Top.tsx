import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}
const Top = ({ match, history, location }: Props) => {
  return (
    <div>
        <h1> Hello world! </h1>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
    </div>
  );
};

export default Top;
