import React from 'react';
import formCss from './TodoFrom.module.scss'
import TodoItems from "../TodoItems/TodoItems";

const TodoForm = ({data,stateChanger}) => {

    const [value, setValue] = React.useState('');
    const PreventFormAction = (event) => {

        stateChanger({title: value , done:false})
        event.preventDefault();
        setValue('');
    }

    return (
        <>
            <form action="#" onSubmit={PreventFormAction} className={formCss.form}>
                <input onChange={(event) => setValue(event.target.value)}
                       value={value} className={formCss.input}
                       placeholder={'Add todo...'} type="text"/>
                <button type={"submit"} className={formCss.btn}> Add</button>
            </form>
            <TodoItems items={data}/>
        </>
    );
};

export default TodoForm;