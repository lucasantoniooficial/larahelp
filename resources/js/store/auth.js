export default {
    namespaced: true,
    state: {
        user: {},
        token: '',
        authenticated: false
    },
    mutations: {
        START_SESSION(store, data) {
            store.user = data.user;
            store.token = data.token;
            store.authenticated = true;
        }
    },
    actions: {
        login({commit}, data) {
            return axios.post('/api/login', data).then(resolve => {
                commit('START_SESSION', resolve.data);
                axios.defaults.headers.common['Authorization'] = `Bearer ${resolve.data.token}`;
            }).catch()
        }
    },
    getters: {}
}
