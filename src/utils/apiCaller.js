import axios from "axios";
import *as configs from "../reduxField/constants/config"
export default function (endPoint , method = "GET" , body){
    return axios({
        method:method , 
        url: `${configs.URL_API}/${endPoint}`,
        data: body
    }).catch(error => {console.log("ERROR" , error)})
}