import {HttpsGet,HttpsPost} from '../utils/axiosUtils'

export const dashboradService = (param)=>{ return HttpsPost('https://th-dev.orjujeng.click/api/dashborad/dashborad',param)}