import axios from "axios";

// экземпляр axios. В нем все настройки запросов
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    header: {
        "API-KEY": "6d29aaca-9c33-4267-8483-b33b2" // сгенерировано на сайте
    }
})

// впомогательный объект, содержащий методы - упаковка для всех методов
export const usersAPI = {
    getUsers(currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) // === axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data; // чтобы в компоненту не передавалось ничего лишнего
            })
    }
}

// перенесли в usersAPI
// export const getUsers = (currentPage=1, pageSize=10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`) // === `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
//         .then(response => {
//             return response.data;
//         })
// }

// нерабочие заготовки для следующих уроков
// export const instance.getAuthMe = (setAuthUserData) => {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//         withCredentials: true
//     })
//     .then(response => response.data)
// }

// export const getUsersFollow = (currentPage=1, pageSize=10) => {
//     return instance.axios.get(`follow?page=${currentPage}&count=${pageSize}`) 
//         .then(response => {
//             return response.data;
//         })
// }
