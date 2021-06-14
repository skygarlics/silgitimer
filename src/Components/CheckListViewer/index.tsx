import React, { useContext } from 'react';
import { CheckListContext } from "Contexts/CheckListContext";
import CheckItem from "./CheckItem";
import { List, Typography } from '@material-ui/core';

interface Props {}

const CheckListViewer = ({ }: Props) => {
    const { checkList } = useContext<ICheckListContext>(CheckListContext);
    return (
        (checkList.length < 1) ?
        <Typography variant="h4">List is Empty</Typography>
        :
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
