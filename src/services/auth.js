import {HttpsGet,HttpsPost} from '../utils/axiosUtils'

export const loginService = (param)=>{ return HttpsGet('https://api.orjujeng.click/auth/login',param)}
export const resetService = (param)=>{ return HttpsPost('http://api.orjujeng.click/auth/reset',param)}
export const regService = (param)=>{ return HttpsPost('http://api.orjujeng.click/auth/reg',param)}