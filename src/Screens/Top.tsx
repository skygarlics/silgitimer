import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}
const Top = ({ match, history, location }: Props) => {
  return (
    <div>
        <Link to="/timer">TIMER</Link>
        <Link to="/case">CASE</Link>
    </div>
  );
};

export default Top;
