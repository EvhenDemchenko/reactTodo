import React, {Component} from 'react';
import itemCss from './TodoItem.module.scss'
import correct from '../../assets/correct.png'
import incorrect from '../../assets/discorrect.png'

class TodoItem extends Component {
    deleteHandle() {
        const {DeleteItem} = this.props;
        DeleteItem(this.props.item.id);
    }

    setDoneItem() {
        const {setChecked} = this.props;
        setChecked(this.props.item.id);
    }

    render() {
        const {item} = this.props;
        return (
            <>
                <div
                    className={itemCss.item}>
                    <b>{item.title}</b>
                    <div className='d-flex align-center'>
                        <button
                            className={itemCss.btn}
                            onClick={this.deleteHandle.bind(this)}
                        > delete
                        </button>
                        {item.done
                            ? <img onClick={this.setDoneItem.bind(this)} className='ml-10' width={30} height={30}
                                   src={correct} alt="correct"/>
                            : <img onClick={this.setDoneItem.bind(this)} className='ml-10' width={30} height={30}
                                   src={incorrect} alt="incorrect"/>
                        }</div>
                </div>
            </>
        )
    }
}

export default TodoItem;