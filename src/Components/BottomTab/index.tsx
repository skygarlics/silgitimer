import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import { AlarmOn, CheckCircleOutline, Edit } from '@material-ui/icons';
import { useState } from 'react';

const BottomTab = () => {
    const [value, setValue] = useState(0);
    return(
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
    )
}

export default BottomTab;
