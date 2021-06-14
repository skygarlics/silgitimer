import React, { useContext } from 'react';
import { CheckListContext } from "CheckListContext";
import CheckItem from "./CheckItem";
import { List } from '@material-ui/core';

interface Props {}

const CheckListViewer = ({ }: Props) => {
    const { checkList } = useContext<ICheckListContext>(CheckListContext);

    return (
        <List>
            {checkList.map((value) => {
                let txt = value.value;
                return (
                    <CheckItem text={txt}/>
                );
            })}
        </List>
    );
};

export default CheckListViewer
