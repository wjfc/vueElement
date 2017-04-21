import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count: 0
    },
    // mutations 同步
    mutations: {
        add(state, payload) {
            state.count += payload.num
        }
    },
    // actions 异步
    // Action 提交的是 mutation，而不是直接变更状态
    actions: {
        addAsync ({ commit }){
            setTimeout(() => {
                commit('add', {num: 1000})
            },1000)
        }
    }
});