import {HttpsGet,HttpsPost} from '../utils/axiosUtils'

export const loginService = (param)=>{ return HttpsGet('http://127.0.0.1:8080/auth/login',param)}
export const resetService = (param)=>{ return HttpsPost('http://127.0.0.1:8080/auth/reset',param)}
export const regService = (param)=>{ return HttpsPost('http://127.0.0.1:8080/auth/reg',param)}