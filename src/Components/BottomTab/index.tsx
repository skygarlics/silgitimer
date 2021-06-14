import { BottomNavigation, BottomNavigationAction, } from '@material-ui/core';
import { AlarmOn, CheckCircleOutline, Edit } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BottomTab = () => {
    const pathname = window.location.pathname;
    const [value, setValue] = useState(pathname);
    return(
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        >
            <BottomNavigationAction value="/timer" label="Timer" icon={<AlarmOn/>} component={Link} to='/timer' />
            <BottomNavigationAction value="/case" label="Case" icon={<CheckCircleOutline />} component={Link} to='/case' />
            <BottomNavigationAction value="/editor" label="Editor" icon={<Edit />} component={Link} to='/editor' />
        </BottomNavigation>
    )
}

export default BottomTab;
