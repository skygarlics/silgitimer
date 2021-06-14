import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Container } from '@material-ui/core'

import Timer from 'Components/Timer';
import CheckListViewer from 'Components/CheckListViewer';

interface Props extends RouteComponentProps {}

const Page1 = ({ history }: Props) => {
  return (
    <Container>
      <Timer />
      <CheckListViewer />
      <a onClick={history.goBack}>Previous Page</a>
      <Link to="/">Top</Link>
      <Link to="/page2">CASE</Link>
    </Container>
  );
};

export default Page1;
