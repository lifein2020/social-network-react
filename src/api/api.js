import axios from "axios";

// экземпляр axios. В нем все настройки запросов
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    header: {
        "API-KEY": "520c259a-07f7-4c3c-b11d-ffdac03ad409" // сгенерировано на сайте  6d29aaca-9c33-4267-8483-b33b2
    }
})

// впомогательный объект, содержащий методы - упаковка для всех методов
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) // === axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data; // чтобы в компоненту не передавалось ничего лишнего
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    // Избавляемся от дублирования кода...
    // getProfile(userId) {
    //     return instance.get(`profile/` + userId);
    // }
    //... делегируем вызов. Backward compatibility
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }); //  в put отправляем на сервак вторым параметром согласно документации объект со свойством status
    },
}

export const authAPI = {
     // запрос чтобы понять кто мы, залогинены или нет
    me() {
        return instance.get(`auth/me`)
    },
}
