import React from 'react';
import itemCss from './TodoItem.module.scss'

import correct from '../../assets/correct.png'
import incorrect from '../../assets/discorrect.png'


const TodoItem = ({item}) => {
    const [done, setDone] = React.useState(item.done);
    const stateChanger = () => {
        setDone(!done);
        item.done = !done;
    }
    return (
        <>
        {done === true ?
            <div onClick={stateChanger}
                 className={itemCss.item}>
                <b> <s> {item.title} </s></b>
                <img width={30} height={30} src={correct} alt="correct"/>
            </div> :
            <div onClick={stateChanger}
                 className={itemCss.item}>
                <b>{item.title}</b>
                <img width={30} height={30} src={incorrect} alt="incorrect"/>
            </div>
        }
        </>
)
};

export default TodoItem;