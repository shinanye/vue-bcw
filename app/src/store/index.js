import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

import shop from './modules/shopBody'
import shoplist from './modules/shops'
import onlyShops from './modules/onlyShops'
export default new Vuex.Store({
    modules:{
        shop:shop,
        shoplist:shoplist,
        onlyShops:onlyShops
    }
})