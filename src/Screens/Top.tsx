import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import { Link, RouteComponentProps } from 'react-router-dom';
import { AlarmOn, CheckCircleOutline, Edit } from '@material-ui/icons';

interface Props extends RouteComponentProps {}
const Top = ({ match, history, location }: Props) => {

    const [value, setValue] = React.useState(0);
    return (
    <div>
        <h1> TOP PAGE </h1>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="Timer" icon={<AlarmOn/>} />
          <BottomNavigationAction label="Case" icon={<CheckCircleOutline />} />
          <BottomNavigationAction label="Editor" icon={<Edit />} />
        </BottomNavigation>
    </div>
    
  );
};

export default Top;
