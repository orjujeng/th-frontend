import {HttpsGet,HttpsPost} from '../utils/axiosUtils'

export const loginService = (param)=>{ return HttpsGet('https://th-dev.orjujeng.click/api/auth/login',param)}
export const resetService = (param)=>{ return HttpsPost('https://th-dev.orjujeng.click/api/auth/reset',param)}
export const regService = (param)=>{ return HttpsPost('https://th-dev.orjujeng.click/api/auth/reg',param)}