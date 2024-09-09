import {HttpsGet} from '../utils/axiosUtils'

export const loginService = (param)=>{ return HttpsGet('/login',param)}