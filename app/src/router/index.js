import Vue from 'vue'
import Router from 'vue-router'

import Lun from '@/components/Lun'
import NavCopy from '@/components/NavCopy'
import MainTop from '@/components/MainTop'
import MainBody from '@/components/MainBody'
import FooterBar from '@/components/FooterBar'
import seacherShops from '@/components/seacherShops'
import classType from '@/components/classType'
import Shops from '@/components/Shops'
import AllShops from '@/components/AllShops'
import aloneShops from '@/components/aloneShops'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lun',
      components:{
        default:NavCopy,
        FooterBar:FooterBar
      },
      children:[
        {
        path: '/',
        name: 'indexContainer',
        components:{
          MainTop:MainTop,
          MainBody:MainBody,
          AllShops:AllShops
          },
        }
      ]
    },
    {
      path: '/seacherShops',
      name: 'seacherShops',
      components:{
        default:seacherShops
      }
    },
    {
      path: '/classType',
      name: 'classType',
      components:{
        default:classType,
        FooterBar:FooterBar
      }
    },
    {
      path: '/classType/shops',
      name: 'shops',
      components:{
        default:Shops,
      }
    },
    {
      path: '/home/AllShops/aloneshops',
      name: 'aloneShops',
      component:aloneShops
    },
  ]
})
