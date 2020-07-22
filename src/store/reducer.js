import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早八点开晨会，分配今天的代码任务',
        '早九点和项目尽力开需求会',
        '早十点进入到开发项目中'
    ]
}

export default (state = defaultState, action) => {
    // reducer里面只能接收state，不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }

    //state值只能传递，不能使用
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    //state值只能传递，不能使用
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)  //删除下标对应项
        return newState
    }
    return state
}