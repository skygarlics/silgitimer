import React, {createContext, useState, useEffect } from 'react';

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const CheckListContext = createContext<ICheckListContext>({
    checkList: [],
    addCheckList: (check: string): void => {},
    removeCheckList: (index: number): void => {},
});

const CheckListContextProvider = ({ children }: Props) => {
    const [checkList, setCheckList] = useState<Array<ICheckListValue>>([]);

    const addCheckList = (check_str: string): void => {
        let new_check = { value: check_str, isChecked: false}
        const list = [...checkList, new_check ];
        setCheckList(list);
        localStorage.setItem('checkList', JSON.stringify(list));
    };

    const removeCheckList = (index: number): void => {
        let list = [...checkList];
        list.splice(index, 1);
        setCheckList(list);
        localStorage.setItem('checkList', JSON.stringify(list));
    };

    const initData = async () => {
        try {
            const list = await localStorage.getItem('checkList');
            if (list !== null) {
                setCheckList(JSON.parse(list));
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        initData();
    }, []);

    return (
        <CheckListContext.Provider
          value={{
              checkList,
              addCheckList,
              removeCheckList,
            }}>
              {children}
        </CheckListContext.Provider>
    );
};

export { CheckListContextProvider, CheckListContext }
