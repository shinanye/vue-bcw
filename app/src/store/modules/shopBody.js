const state={
    list:[]
}
const mutations = {
    setlist(state,value){
        state.list = value;
    }
}

const actions = {
    increment(context,value){
        context.commit('get',value);
    },
    getlist(context,value){
        context.commit('get',value)
    }
}

export default{
    state,
    mutations,
    actions
}