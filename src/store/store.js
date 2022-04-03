import { createStore } from 'vuex';
import jwt_decode from 'jwt-decode';

export const store = createStore({
    strict: true,
    state: {
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
        loggedIn: localStorage.getItem('loggedIn')
    },
    mutations:{
        setToken(state, token){
            state.token = token
            state.userId = jwt_decode(token)._id

            if (token){
                state.loggedIn = true
            }
            else {
                state.loggedIn = false
            }
        },
        removeToken(state){
            state.token = null
            state.userId = null
            state.loggedIn = false
        }
    },
    actions:{
        setToken({commit}, token){
            localStorage.setItem('token', token)
            localStorage.setItem('userId', jwt_decode(token)._id)
            localStorage.setItem('loggedIn', true)
            commit('setToken', token)
        },
        removeToken({commit}){
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('loggedIn')
            commit('removeToken')
        }
    }
})