// khai bao cac thong tin cau hinh chung cho API cua trang wed
import axios from "axios";
import Storage from 'Storage/Storage';

// khai bao thong tin chung cua axios: axios.create khoi tao cau hinh ban dau axios
const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    header: {
        "content-type": "application/json",
    }
})

axiosClient.interceptors.response.use(async(config) =>{

    const token = Storage.getToken();
    if (token !== null && token !== undefined) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// ham xu ly call api: 
// methor: phuong thuc get post put delete
// endpoint: duong link mo rong: duong link co ban + duong link mo rong
// payload: du lieu day kem khi call api 
export const api = async (method_param, endpoint_param, payload_param) => {
    try {
        const response = await axiosClient(endpoint_param, { method: method_param, data: payload_param });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};



    