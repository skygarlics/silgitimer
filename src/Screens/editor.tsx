import { Container } from '@material-ui/core';
import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

const EditorScreen = ({ history }: Props) => {
  return (
    <Container>
      <a onClick={history.goBack}>Previous Page</a>
      <Link to="/">Top </Link>
      <Link to="/timer"> Timer</Link>
      <Link to="/case"> Case</Link>
    </Container>
  );
};

export default EditorScreen;
