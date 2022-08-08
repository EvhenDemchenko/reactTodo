import AppModule from './App.module.scss'
import TodoForm from "./components/TodoForm/TodoForm";
import React from "react";

const App = () => {
    const STORE = [
        {title: 'title', done: false},
        {title: 'title2', done: false},
        {title: 'title3', done: false},
        {title: 'title4', done: false},
        {title: 'title5', done: false,}
    ]
    const [state, setState] = React.useState(STORE);

    return (
        <div className={AppModule.wrapper}>
            <TodoForm data={state}
                      stateChanger={(st) => setState([st, ...state])}
            />
        </div>
    );
}

export default App;
