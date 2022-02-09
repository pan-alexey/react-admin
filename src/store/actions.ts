import * as UserActionCreators from './actions/userAction'
import * as TodoActionCreators from './actions/todoAction'

const actions = {
    ...TodoActionCreators,
    ...UserActionCreators
}

export default actions;