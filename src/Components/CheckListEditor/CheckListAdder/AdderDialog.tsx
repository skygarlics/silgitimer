import React, { useContext, useState } from 'react';
import { CheckListContext } from "Contexts/CheckListContext";
import { Button, Dialog, DialogContent, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    open: boolean;
    onClose: (value: string) => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("xs")]: {
        alignItems: "flex-end" // push the dialog to bottom
      }
    },
    paper: {
      // make the content full width
      [theme.breakpoints.down("xs")]: {
        margin: 0,
        maxWidth: "100%",
        width: "100%"
      }
    }
  }));

const AdderDialog = ({ open, onClose }: Props) => {

    const classes = useStyles();

    const { addCheckList } = useContext<ICheckListContext>(CheckListContext);

    const [checkText, setCheckText ] = useState('');

    return (
    <Dialog
        open={open}
        onClose={onClose}
        classes={{ container: classes.root, paper: classes.paper }}
    >
        <DialogContent>
            <TextField
                autoFocus
                margin="none"
                type="text"
                fullWidth
                value={checkText}
                onChange={(event)=>{setCheckText(event.target.value)}}
            />
            <Button
                onClick={()=>{
                    addCheckList(checkText);
                    setCheckText('');
                    onClose('');
                }}
            >
                SUBMIT
            </Button>
        </DialogContent>
    </Dialog>
    );
};

export default AdderDialog
