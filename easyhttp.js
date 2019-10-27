/**
 * EasyHttp.js
 * 人性化的Http请求
 * @version 0.0.2
 * @author dollarkillerx
 * @license MIT
 */

class EasyHttp {
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData
    }

    async post(url, data, type = 'Form') {
        switch (type) {
            case "Form": {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    body: JSON.stringify(data)
                });
                const resData = await response.json();
                return resData;
            }
            default: {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const resData = await response.json();
                return resData
            }
        }
    }

    async put(url, data, type = 'Form') {
        switch (type) {
            case "Form": {
                const response = await fetch(url, {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    body: JSON.stringify(data)
                });
                const resData = await response.json();
                return resData;
            }
            default: {
                const response = await fetch(url, {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const resData = await response.json();
                return resData
            }
        }
    }

    async delete(url, data, type = 'Form') {
        switch (type) {
            case "Form": {
                const response = await fetch(url, {
                    method: "DELETE",
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    body: JSON.stringify(data)
                });
                const resData = await response.json();
                return resData;
            }
            default: {
                const response = await fetch(url, {
                    method: "DELETE",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const resData = await response.json();
                return resData
            }
        }
    }

}

// 实例:
// const http = new EasyHttp();
// const users = http.get("https://jsoplaceholder.typicode.com/users");
// users
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
//
// // 传输数据
// const data = {
//     name: "DollarKiller",
//     username: "DollarKillerX",
//     email: "dollarkiller@dollarkiller.com"
// };
//
// http.post("https://jsonplaceholder.typicode.com/users", data, "json")
//     .then(data => console.log(data))
//     .catch(err => console.log(err));