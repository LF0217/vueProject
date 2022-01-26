import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        accessToken: null,
        action:[],
        menu : [],
        user:null,
        loginRestrictionCfg:null,
        uiSetting:null,
        topBarHeight:71
    },
    mutations: {
        accessToken (state,accessToken) {
            state.accessToken=accessToken;
        },
        action(state,action) {
            state.action=action;
        },
        menu(state, menu){
            state.menu = menu;
        },
        user(state,user) {
            state.user=user;
        },
        loginRestrictionCfg(state,loginRestrictionCfg){
            state.loginRestrictionCfg=loginRestrictionCfg;
        },
        uiSetting(state,uiSetting){
            state.uiSetting=uiSetting;
        },
        topBarHeight(state,topBarHeight) {
            state.topBarHeight=topBarHeight;
        }
    },
    getters
})

export default store
