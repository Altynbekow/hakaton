// userApi.js
import axios from "axios";

class userApi {
    createUser(data) {
        return axios.post("/users", data, {
            headers: {
                "Content-Type": "application/json"
            },
        })
    }
    loginUser(data) {
        return axios.post("/auth/signin", data, { // Исправлено на /auth/signin
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
    getUser(token) {
        if (token) {
            return axios.post("/auth/profile", {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
        }
    }
}

export default new userApi();
