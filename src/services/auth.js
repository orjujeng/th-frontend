import {HttpsGet,HttpsPost} from '../utils/axiosUtils'

export const loginService = (param)=>{ return HttpsGet('https://poc.orjujeng.click/api/auth/login',param)}
export const resetService = (param)=>{ return HttpsPost('https://poc.orjujeng.click/api/auth/reset',param)}
export const regService = (param)=>{ return HttpsPost('https://poc.orjujeng.click/api/auth/reg',param)}