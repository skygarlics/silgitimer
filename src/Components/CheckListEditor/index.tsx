import { Container } from '@material-ui/core';
import React from 'react';
import CheckListAdder from './CheckListAdder';
import CheckListDeleter from './CheckListDeleter';

interface Props {}

const CheckListViewer = ({ }: Props) => {
    return (
        <Container>
            <CheckListDeleter />
            <CheckListAdder />
        </Container>
    );
};

export default CheckListViewer
