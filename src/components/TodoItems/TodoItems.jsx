import React, {Component} from 'react';
import itemsCss from './TodoItems.module.scss'
import TodoItem from "../TodoItem/TodoItem";


class TodoItems extends Component {
    render() {
        const {setChecked, DeleteItem, items} = this.props;
        return (
            <div className={itemsCss.items}>
                {items.map((item) => {
                        return (<TodoItem
                            setChecked={setChecked}
                            DeleteItem={DeleteItem}
                            key={item.id}
                            item={item}/>)
                    }
                )}
            </div>
        );
    }
}

export default TodoItems;