import {HttpsGet,HttpsPost} from '../utils/axiosUtils'

export const dashboradService = (param)=>{ return HttpsPost('http://127.0.0.1:8080/dashborad/dashborad',param)}