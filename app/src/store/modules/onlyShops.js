const state={
    onlyShopsList:{},
}

const mutations = {
    setOnlyShopsList(state,value){
        state.onlyShopsList = value;
    }
}

const actions = {
    increment(context,value){
        context.commit('get',value);
    },
    getOnlyShopsList(context,value){
        context.commit('get',value)
    }
}

export default{
    state,
    mutations,
    actions
}