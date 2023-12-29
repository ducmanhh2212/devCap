import { api } from "./API";

const existsByEmail = (email) => {
    return api.get(`${url}/email/${email}`);
};

const existsByUsername = (username) => {
    return api.get(`${url}/userName/${username}`);
};

const create = (username, email, password, fullname) => {
    const body = {
        userName: username,
        email: email,
        password: password,
        fullname: fullname
    }
    return api.post(url, body);
};

const resendEmailToActiveAccount = (email) => {
    const requestParams = {
        email: email
    }

    return api.get(`${url}/userRegistrationConfirmRequest`, { params: requestParams });
};

const requestResetPassword = (email) => {
    const requestParams = {
        email: email
    }

    return api.get(`${url}/resetPasswordRequest`, { params: requestParams });
};

const resendEmailToResetPassword = (email) => {
    const requestParams = {
        email: email
    }

    return api.get(`${url}/resendResetPassword`, { params: requestParams });
};

const resetPassword = (token, newPassword) => {
    const requestParams = {
        token: token,
        newPassword: newPassword
    }

    return api.get(`${url}/resetPassword`, { params: requestParams });
};

const getProfile = () => {
    return api.get(`${url}/profile`);
};

const changeProfile = (avatarUrl) => {
    const body = {
        avatarUrl: avatarUrl
    }
    return api.put(`${url}/profile`, body);
};

// export
const API = { existsByEmail, existsByUsername, create, resendEmailToActiveAccount, requestResetPassword, resendEmailToResetPassword, resetPassword, getProfile, changeProfile }
export default API;