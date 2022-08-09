import itemCss from './TodoItem.module.scss'
import correct from '../../assets/correct.png'
import incorrect from '../../assets/discorrect.png'

import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    deleteHandle(){
        const {DeleteItem} = this.props;
        DeleteItem(this.props.item.id);
    }
    setDoneItem () {
        const {setChecked} = this.props;
        setChecked(this.props.item.id)
    }
    render() {
        return (
            <>
                <div
                    className={itemCss.item}>
                    <b>{this.props.item.title}</b>
                    <div className='d-flex align-center'>
                        <button
                            className={itemCss.btn}
                            onClick={this.deleteHandle.bind(this)}
                        > delete </button>
                        {this.props.item.done
                            ?<img onClick={this.setDoneItem.bind(this)} className='ml-10' width={30} height={30} src={correct} alt="correct"/>
                            :<img onClick={this.setDoneItem.bind(this)} className='ml-10' width={30} height={30} src={incorrect} alt="incorrect"/>
                        }</div>

                </div>
            </>
        )
    }
}

export default TodoItem;