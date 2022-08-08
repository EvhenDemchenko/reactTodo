import React from 'react';
import itemsCss from './TodoItems.module.scss'
import TodoItem from "../TodoItem/TodoItem";

const TodoItems = ({items}) => {


    return (

        <div className={itemsCss.items}>
            {items.map((item,index) => {
                    return (<TodoItem
                        key={index}
                        item={item}/>)
                }
            )}

        </div>
    );
};

export default TodoItems;