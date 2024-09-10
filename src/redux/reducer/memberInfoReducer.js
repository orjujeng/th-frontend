import { ADD_INFO, CLEAR_INFO } from '../const'
const init = {}

export default function memberInfoReducer(perState=init,action){
    const {type,data} = action
    switch (type) {
        case ADD_INFO:
            return data;
        case CLEAR_INFO:
            return data;
        default:
            return perState;
    }
}