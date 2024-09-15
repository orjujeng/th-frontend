import axios from "axios";
export const HttpsGet = (requestUrl, param) => {
    return new Promise((resolve, reject) => {
        axios.get(requestUrl,param)
            .then(response => {
                resolve(response.data); 
            })
            .catch(error => {
                reject(error)
            })});
    }

export const HttpsPost = (requestUrl, param) => {
        return new Promise((resolve, reject) => {
            axios.post(requestUrl,param)
                .then(response => {
                    
                    resolve(response.data); 
                })
                .catch(error => {
                    reject(error);
                })});
}