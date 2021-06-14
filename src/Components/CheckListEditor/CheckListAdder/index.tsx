import { Button, Container, IconButton, Typography } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import AdderDialog from './AdderDialog'

interface Props {}

const CheckListAdder = ({ }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = (value: string) => {
        setOpen(false);
    }

    return (
        <Container>
            <IconButton onClick={() => { setOpen(true); }}>
                <AddCircle />
            </IconButton>
            <AdderDialog 
                open={open}
                onClose={handleClose}
            />
        </Container>
    )
}

export default CheckListAdder;
