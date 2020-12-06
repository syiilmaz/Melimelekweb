import { getOwnPropertyDescriptor } from "core-js/fn/object";
import Vue from "vue" ;
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
    fetchedPosts : []
};
const getters = {
    getPosts(state){
        return state.fetchedPosts
    }
};
const mutations = {
    setPosts(state, posts){
        state.fetchedPosts = posts
    }
};
const actions = {
    nuxtServerInit(vuexContext, context){
        vuexContext.commit("setPosts", [
            {
                
      title : "Melimelek 2020 Ajanda", 
      price : "34.90"
            },
            {
                
      title : "Melimelek Turkuaz Ajanda", 
      price : "24,90"
            },
            {
                
        title : "Melimelek Sarı Ajanda", 
         price : "24,90"
            },
            {
                
         title : "Melimelek Turuncu Ajanda", 
          price : "24,90"
          },

        ])
      },
      setPosts(vuexContext, posts){
          vuexContext.commit("setPosts", posts)
      }
};

const store = new Vuex.Store ([
    state,
    getters ,
    mutations ,
    actions,
])

export default store ;