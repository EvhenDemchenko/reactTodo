import itemsCss from './TodoItems.module.scss'
import TodoItem from "../TodoItem/TodoItem";
import React, {Component} from 'react';

class TodoItems extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={itemsCss.items}>
                {this.props.items.map((item) => {
                        return (<TodoItem
                            setChecked={this.props.setChecked}
                            DeleteItem={this.props.DeleteItem}
                            key={item.id}
                            item={item}/>)
                    }
                )}
            </div>
        );
    }
}

export default TodoItems;