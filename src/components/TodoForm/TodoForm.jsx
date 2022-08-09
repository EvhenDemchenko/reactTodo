import React, {Component} from 'react';
import formCss from './TodoFrom.module.scss'
import {v4} from 'uuid';
import TodoItems from "../TodoItems/TodoItems";

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
        })
        event.preventDefault();
    }

    getInputValue(event) {
        this.setState({
            inputValue: event.target.value,
        })
    }

    render() {
        return (
            <>
                <form action="#" onSubmit={this.PreventFormAction.bind(this)}
                      className={formCss.form}>
                    <input onChange={this.getInputValue.bind(this)}
                           value={this.state.inputValue}
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
                    setChecked={this.props.setChecked}
                    DeleteItem={this.props.DeleteItem}
                    items={this.props.items}
                />
            </>
        );
    }


}


export default TodoForm;