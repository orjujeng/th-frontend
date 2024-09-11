import {HttpsGet} from '../utils/axiosUtils'

export const dashboradService = (param)=>{ return HttpsGet('/dashborad',param)}