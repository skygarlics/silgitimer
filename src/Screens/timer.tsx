import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Container } from '@material-ui/core'

import Timer from 'Components/Timer';
import CheckListViewer from 'Components/CheckListViewer';

interface Props extends RouteComponentProps {}

const TimerScreen = ({ history }: Props) => {
  return (
    <Container>
      <Timer />
      <CheckListViewer />
      <a onClick={history.goBack}>Previous Page</a>
      <Link to="/">Top </Link>
      <Link to="/case">CASE </Link>
      <Link to="/editor">Editor</Link>
    </Container>
  );
};

export default TimerScreen;
