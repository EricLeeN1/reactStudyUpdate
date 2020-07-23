import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store'
import { changeInputAction, deleteItemAction, addItemAction } from './store/actionCreators'

class TodoLists extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState());
        this.state = store.getState()
        this.inputChange = this.inputChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        //----------关键代码-----------start
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
        //----------关键代码-----------end
    }
    render() {
        return (
            <div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <Input onChange={this.inputChange} placeholder={this.state.inputValue} style={{ width: '200px' }} value={this.state.inputValue} />
                    <Button type='primary' onClick={this.clickBtn}>增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }} >
                    <List bordered dataSource={this.state.list} renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}></List>
                </div>
            </div>
        );
    }
    inputChange(e) {
        console.log(e.target.value);
        const action = changeInputAction(e.target.value);
        store.dispatch(action)
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action);
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action);
    }
    storeChange() {
        console.log(store.getState());
        this.setState(store.getState())
    }
}

export default TodoLists;