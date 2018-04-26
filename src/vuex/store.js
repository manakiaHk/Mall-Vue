import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const  state = {
  count:0,
  msg:'hello vuex'
};



const getters = {
  cont_get:function(state){
    return state.count +=7;
  }
}



const mutations= {
  add(state,n){
    state.count+=n;
  },
  reduce(state,n){
    state.count-=n;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters
});
