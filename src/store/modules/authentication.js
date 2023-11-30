import {authentication} from "@/api";
import {LOGIN, LOGOUT} from "@/store/modules/mutation-types";

const state = {
    isLoggedIn: false,
    userId: localStorage.getItem('id') || null,
    userEmail: localStorage.getItem('email') || null,
};

const mutations = {
    [LOGIN](state, payload) {
        localStorage.setItem('id', payload.id);
        localStorage.setItem('email', payload.email);
    },

    [LOGOUT](state) {
        localStorage.removeItem('id');
        localStorage.removeItem('email');
    },
}

const getters = {
    isLoggedIn: state => {
        return state.userId !== null || state.userEmail !== null ? state.isLoggedIn = true : state.isLoggedIn = false
    }
}


const actions = {
    async login({dispatch, commit}, items) {
        try {
            await authentication.postAuthentication(items).then(({data}) => {
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