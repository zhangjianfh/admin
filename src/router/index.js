import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import EmergencyPlan from '@/pages/emergency/EmergencyPlan'
import New from '@/pages/emergency/egymanage/New'
import NewBasicInfo from '@/pages/emergency/egymanage/NewBasicInfo'
import PlanContent from '@/pages/emergency/egymanage/PlanContent'
import EgyOrgan from '@/pages/emergency/egymanage/EgyOrgan'
import EgyResource from '@/pages/emergency/egymanage/EgyResource'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/', name:'Index', meta: {requireAuth: true}, component:Index },
    { path:'/emergencyplan', name:'EmergencyPlan', meta: {requireAuth: true}, component:EmergencyPlan },
    { path:'/new', name:'New', meta: {requireAuth: true}, component:New, children:[
        { path:'/newbasicinfo', component:NewBasicInfo },
        { path:'/plancontent', component:PlanContent },
        { path:'/egyorgan', component:EgyOrgan },
        { path:'/egyresource', component:EgyResource }
      ] },
  ]
})
