import React, { useContext } from 'react';
import { CheckListContext } from "Contexts/CheckListContext";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import { RemoveCircle } from '@material-ui/icons';

interface Props {}

const CheckListDeleter = ({ }: Props) => {
    const { checkList, removeCheckList } = useContext<ICheckListContext>(CheckListContext);
    return (
        (checkList.length < 1) ?
        <Typography variant="h4">+를 눌러 체크리스트 추가</Typography>
        :
        <List>
        {checkList.map((item, index) => {
            let txt = item.value;
            let labelId = `checkbox-list-${ txt }-${ index }`;
            return (
            <ListItem key={index} role={undefined} dense button>
                <ListItemText id={labelId} primary={`${ txt }`} />
                <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    onClick={()=>{
                        removeCheckList(index);
                    }}
                >
                    <RemoveCircle />
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            );
        })}
        </List>
    );
};

export default CheckListDeleter
