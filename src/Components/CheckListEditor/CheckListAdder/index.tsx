import { Button, Container, Typography } from '@material-ui/core';
import { CheckListContext } from 'Contexts/CheckListContext';
import React, { useContext, useState } from 'react';
import AdderDialog from './AdderDialog'

interface Props {}

const CheckListAdder = ({ }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = (value: string) => {
        setOpen(false);
    }

    return (
        <Container>
            <Button
                onClick={() => {
                    setOpen(true);
                }}
            >+</Button>
            <AdderDialog 
                open={open}
                onClose={handleClose}
            />
        </Container>
    )
}

export default CheckListAdder;
