import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import CaseViewer from 'Components/CaseViewer';
import CheckListViewer from 'Components/CheckListViewer';

interface Props extends RouteComponentProps {}

const CaseScreen = ({ history }: Props) => {
    return (
        <div>
            <CaseViewer
                title={"Test case"}
                caseText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
            <CheckListViewer />
            <a onClick={history.goBack}>Previous Page</a>
            <Link to="/">Top</Link>
            <Link to="/timer">timer</Link>
            <Link to="/editor">editor</Link>
        </div>
    );
};

export default CaseScreen;