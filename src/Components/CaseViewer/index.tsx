import React from 'react';
import { Container, Typography, Divider} from '@material-ui/core'


interface Props {
    title?: string;
    caseText?: string;
    style?: object;
}

const CaseViewer = (props: Props) => {
    return (
        <Container>
            {(props.title !== undefined) &&
            <Typography id="Title" variant="h6">
                {props.title}
                <Divider />
            </Typography>
            }
            <Typography id="Text" variant="body1">
                {props.caseText}
            </Typography>
        </Container>
    );
}

export default CaseViewer;
