import React, { useState } from 'react';
import { Checkbox, Container, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'


interface Props {
    text: string;
}

const CheckItem = ({ text }: Props) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const handleToggle = () => {
        setToggleCheckBox(!toggleCheckBox);
    };

    const labelId = `checkbox-list-label-${ text }`;
    return (
        <ListItem key={text} role={undefined} dense button onClick={handleToggle}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={toggleCheckBox}
                    disableRipple
                    color="primary"
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${ text }`} />
        </ListItem>
    );
};

export default CheckItem;
