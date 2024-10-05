import {HttpsGet,HttpsPost} from '../utils/axiosUtils'

export const dashboradService = (param)=>{ return HttpsPost('https://api.orjujeng.click/dashborad/dashborad',param)}