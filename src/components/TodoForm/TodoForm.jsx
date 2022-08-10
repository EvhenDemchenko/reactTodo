import React, {Component} from 'react';
import TodoItems from "../TodoItems/TodoItems";
import formCss from './TodoFrom.module.scss'
import {v4} from 'uuid';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    PreventFormAction(event) {
        const {addItem} = this.props;
        const {inputValue} = this.state;
        addItem(v4(), inputValue, false);
        this.setState({
            inputValue: ''
        });
        event.preventDefault();
    }

    getInputValue(event) {
        this.setState({
            inputValue: event.target.value,
        });
    }

    render() {
        const {setChecked, DeleteItem, items, inputValue} = this.props;

        return (<>
            <form action="#" onSubmit={this.PreventFormAction.bind(this)}
                  className={formCss.form}>
                <input onChange={this.getInputValue.bind(this)}
                       value={inputValue}
                       className={formCss.input}
                       placeholder={'Add todo...'}
                       type="text"/>
                <button
                    type="submit"
                    className={formCss.btn}>
                    Add
                </button>
            </form>
            <TodoItems
                setChecked={setChecked}
                DeleteItem={DeleteItem}
                items={items}
            />
        </>);
    }


}


export default TodoForm;