import axios from "axios";

let apis = {};

apis.get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url, params)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            });
    });
}

apis.post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            });
    });
}

apis.put = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .put(url, params)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            });
    });
}

apis.delete = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(url, params)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            });
    });
}

export default apis;