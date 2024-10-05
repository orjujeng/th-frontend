import {HttpsGet,HttpsPost} from '../utils/axiosUtils'

export const dashboradService = (param)=>{ return HttpsPost('http://api.orjujeng.click/dashborad/dashborad',param)}