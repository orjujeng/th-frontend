import { ADD_INFO, CLEAR_INFO, GET_INFO } from '../const'
export const addInfoAction = (data) => ({ type: ADD_INFO, data })
export const getInfoAction = () => ({ type: GET_INFO })
export const clearInfoAction = () => { return { type: CLEAR_INFO, data: {} } }
