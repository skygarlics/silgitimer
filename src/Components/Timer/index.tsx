import React, {useEffect, useRef, useState} from 'react';
import { Container, Grid, Button, TextField } from '@material-ui/core';
import 'index.css';

let gInterval = 0;

const padNum = (num: number) => {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
};


const minuteFromMili = (milisecond: number) => {
    return Math.floor(milisecond / 60000)
};


const secondFromMili = (milisecond: number) => {
    return Math.floor((milisecond % 60000) / 1000)
};

const setTimer = (callback: Function, interval: number) => {
    return setInterval(callback, interval);
}

const clearTimer = (handle: number ) => {
    clearInterval(handle);
}

const Timer = () => {

    const [timeLimit, setTimelimit] = useState<number>(5000);
    const [secondText, setSecondText] = useState<string>('00');
    const [minuteText, setMinuteText] = useState<string>('00');
    const [elapsed, setElapsed] = useState<number>(0);
    const [timerOn, setTimerOn] = useState<boolean>(false);
    const [timeEditable, setTimeEditable] = useState<boolean>(true);

    const refs = {
        minuteTextRef: useRef(null),
    };

    var gStartTime: number = 0;
    var gEndTime: number = 0;

    // Vars for minimize render
    let gMinute = 0;
    let gSecond = 0;

    // init Data
    const initData = async () => {
    };

    const setTimeFromNum = (minute: number, second: number) => {
        setMinuteText( padNum(minute) );
        setSecondText( padNum(second) );
    }

    const setTimeFromMili = (milisecond: number) => {
        let tempSec = secondFromMili(milisecond);
        let tempMin = minuteFromMili(milisecond);
        setTimeFromNum( tempMin, tempSec );
    }

    const setLimit = (minute:number, second: number) => {
        // calc milisecond
        let min = minute * 60000
        let sec = second * 1000
        setTimelimit( min + sec )
    }

    const setLimitFromTime = () => {
        let min = parseInt(minuteText)
        let sec = parseInt(secondText)
        setLimit( min, sec )
    }

    // On THIS component mounts
    useEffect(() => {
        initData();
    }, []);


    // On timerOn changes
    useEffect(() => {
        if (timerOn) {
            startTimer();
        }
        else {
            stopTimer();
        }
    }, [timerOn])

    // On elapsed changes
    useEffect(()=>{
        let remained = timeLimit - elapsed;
        if (remained < 0){
            // On timer finished
            resetTimer();
            alert("끝");
        }

        // 표기시간엔 1초를 더해주는게 좀더 사용자에 익숙함..?
        // 1000 밀리초 더하면 초기화면에서 아예 1초가 더해져버림
        remained += 999;

        // Rendering is expensive

        let tempMin = minuteFromMili(remained)
        let tempSec = secondFromMili(remained)
        if ( (gMinute!=tempMin) || (gSecond!=tempSec) ){
            gMinute = tempMin;
            gSecond = tempSec;
            setTimeFromNum(gMinute, gSecond);
        }
    }, [elapsed]);


    const stopTimer = () => {
        if (timerOn) {
            return;
        }
        gEndTime = Date.now();
        clearTimer(gInterval);
    };


    const resetTimer = () => {
        if (timerOn) {
            setTimerOn(false);
        }
        setTimeFromMili(timeLimit);
        gStartTime = 0;
        gEndTime = 0;
        setTimeEditable(true);
    };

    
    const startTimer = () => {
        if (!timerOn) {
            return;
        }

        if (gStartTime == 0) {
            gStartTime = Date.now()
        } else {
            gStartTime += Date.now() - gEndTime;
        }

        gInterval = setTimer(() => {
            let elapsed = Date.now() - gStartTime;
            setElapsed(elapsed);
        }, 100);

        setTimeEditable(false);
    };

    return (
        <Grid container className="Container">
            <Grid item className="CountDownContainer" xs={12} >
                <Grid container justify="center">
                    <TextField
                        id="MinText"
                        inputMode="numeric"
                        value={minuteText}
                        inputProps={{min: 0, style: { textAlign: 'center', color: "black" }}}
                        onChange={(event)=>{
                            let txt = event.target.value;
                            setMinuteText(txt);
                        }}
                        onBlur={setLimitFromTime}
                        disabled={timerOn}
                    />
                    :
                    <TextField
                        id="SecText"
                        inputMode="numeric"
                        value={secondText}
                        inputProps={{min: 0, style: { textAlign: 'center', color: "black"}}}
                        onChange={(event)=>{
                            let txt = event.target.value;
                            setSecondText(txt);
                        }}
                        onBlur={setLimitFromTime}
                        disabled={timerOn}
                    />
                </Grid>
            </Grid>
            <Grid item className="BtnContainer" xs={12}>
                <Grid container justify="center">
                    <Button
                        variant="contained"
                        color={timerOn? "secondary" : "primary" }
                        onClick={()=>{
                            if (timerOn) {
                                setTimerOn(false);
                            }
                            else {
                                setTimerOn(true);
                            }
                        }}
                    >
                        {timerOn? "STOP":"START"}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={resetTimer}
                    >RESET</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Timer;
