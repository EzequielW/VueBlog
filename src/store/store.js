import { createStore } from 'vuex';
import jwt_decode from 'jwt-decode';

export const store = createStore({
    strict: true,
    state: {
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
        username: localStorage.getItem('username'),
        loggedIn: localStorage.getItem('loggedIn')
    },
    mutations:{
        setToken(state, token){
            state.token = token
            state.userId = jwt_decode(token)._id
            state.username = jwt_decode(token).username

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
            state.username = null
            state.loggedIn = false
        }
    },
    actions:{
        setToken({commit}, token){
            localStorage.setItem('token', token)
            localStorage.setItem('userId', jwt_decode(token)._id)
            localStorage.setItem('username', jwt_decode(token).username)
            localStorage.setItem('loggedIn', true)
            commit('setToken', token)
        },
        removeToken({commit}){
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('username')
            localStorage.removeItem('loggedIn')
            commit('removeToken')
        }
    }
})