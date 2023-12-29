import { api } from "./API";
import FormData from 'form-data'



const login = (username, password) => {

    var body = new FormData();
    body.append('username', username);
    body.append('password', password);

    return api.post("/login", body);
};

// export
const API = { login }
export default API;