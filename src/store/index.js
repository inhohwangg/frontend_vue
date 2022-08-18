import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.useAttrs(Vuex)

export default new Vuex.Store({
    state:{
        userInfo : null,
        isLogin : false
    },
    mutations:{
        // 로그인 성공
        loginSuccess(state, payload) {
            state.isLogin = true
            state.userInfo = payload
        },
        // 로그아웃
        // logout(state) {
        //     state.isLogin = false
        //     state.userInfo = null
        //     localStorage.removeItem('access_token')
        // }
    },
    actions:{
        
    }
})