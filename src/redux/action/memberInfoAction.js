import { ADD_INFO, CLEAR_INFO } from '../const'
export const addInfoAction = (data) => ({ type: ADD_INFO, data })
export const clearInfoAction = () => { return { type: CLEAR_INFO, data: {} } }
