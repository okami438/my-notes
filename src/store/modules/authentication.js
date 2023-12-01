import {authentication} from "@/api";
import {LOGIN, LOGOUT} from "@/store/modules/mutation-types";

const state = {
    isLoggedIn: false,
    token: localStorage.getItem('token') || null
};

const mutations = {
    [LOGIN](state, payload) {
        localStorage.setItem('token', payload.accessToken);
    },

    [LOGOUT](state) {
        localStorage.removeItem('token');
    },
}

const getters = {
    isLoggedIn: state => {
        return state.token !== null ? !state.isLoggedIn : state.isLoggedIn
    },

    userEmail: state => {
        console.log(state.userEmail)
        return state.userEmail !== "undefined" ? state.userEmail : 'Новый пользователь'
    }
}


const actions = {
    async login({dispatch, commit}, items) {
        try {
            await authentication.postAuthentication(items).then(({data}) => {
                console.log(data)
                commit('LOGIN', data)
                location.replace('/notes')
            });
        } catch (e) {
            console.log(e)
        }
    },

    async logout({commit}) {
        try {
            await authentication.deleteAuthentication().then(() => {
                commit('LOGOUT')
                location.replace('/')
            })
        } catch (e) {
            console.log(e)
        }
    },


    async checkUserLogin({dispatch, commit}){
        try {
            await authentication.getAuthentication();
        } catch (e) {
            dispatch('LOGIN')
            console.log(e)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}