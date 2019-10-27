/**
 * EasyHttp.js
 * 人性化的Http请求
 * @version 0.0.1
 * @author dollarkillerx
 * @license MIT
 */

class EasyHttp {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    post(url, data, type = 'Form') {
        switch (type) {
            case "Form":
                return new Promise((resolve, reject) => {
                    fetch(url, {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/x-www-form-urlencoded'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => resolve(data))
                        .catch(err => reject(err))
                });
            default:
                return new Promise((resolve, reject) => {
                    fetch(url, {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => resolve(data))
                        .catch(err => reject(err))
                });
        }
    }

    put(url, data, type = 'Form') {
        switch (type) {
            case "Form":
                return new Promise((resolve, reject) => {
                    fetch(url, {
                        method: "PUT",
                        headers: {
                            'Content-type': 'application/x-www-form-urlencoded'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => resolve(data))
                        .catch(err => reject(err))
                });
            default:
                return new Promise((resolve, reject) => {
                    fetch(url, {
                        method: "PUT",
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => resolve(data))
                        .catch(err => reject(err))
                });
        }
    }

    delete(url, data, type = 'Form') {
        switch (type) {
            case "Form":
                return new Promise((resolve, reject) => {
                    fetch(url, {
                        method: "DELETE",
                        headers: {
                            'Content-type': 'application/x-www-form-urlencoded'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => resolve(data))
                        .catch(err => reject(err))
                });
            default:
                return new Promise((resolve, reject) => {
                    fetch(url, {
                        method: "DELETE",
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => resolve(data))
                        .catch(err => reject(err))
                });
        }
    }

}

const http = new EasyHttp();
const users = http.get("https://jsonplaceholder.typicode.com/users");
users
    .then(data => console.log(data))
    .catch(err => console.log(err));

// 传输数据
const data = {
    name: "DollarKiller",
    username: "DollarKillerX",
    email: "dollarkiller@dollarkiller.com"
};

http.post("https://jsonplaceholder.typicode.com/users", data, "json")
    .then(data => console.log(data))
    .catch(err => console.log(err));