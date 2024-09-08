import { ADD_INFO, CLEAR_INFO, GET_INFO } from '../const'
const init = {}

export default function memberInfoReducer(perState=init,action){
    const {type,data} = action
    switch (type) {
        case ADD_INFO:
            return data;
        case GET_INFO:
            return perState;
        case CLEAR_INFO:
            return data;
        default:
            return perState;
    }
}