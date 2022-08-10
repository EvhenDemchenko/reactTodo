import React, {Component} from "react";
import AppModule from './App.module.scss'
import TodoForm from "../TodoForm/TodoForm";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            done: false
        }
    }

    AddItem(id, title, baseState = this.state.done) {
        const {items} = this.state;
        this.setState({
            items: [...items, {id, title, baseState}],
        })
    }

    DeleteItem(id) {
        const {items} = this.state
        const result = items.filter(item => item.id !== id)
        this.setState({
            items: result
        })
    }

    setChecked(id) {
        const {items} = this.state;
        items.filter((item) => {
            if (item.id === id) {
                item.done = true;
            }
            return this.setState({done: true})
        })
    }

    render() {
        return (
            <div className={AppModule.wrapper}>
                <TodoForm
                    setChecked={this.setChecked.bind(this)}
                    DeleteItem={this.DeleteItem.bind(this)}
                    items={this.state.items}
                    addItem={this.AddItem.bind(this)
                    }/>
            </div>
        )
    }
}

export default App;