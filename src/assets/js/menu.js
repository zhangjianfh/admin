export const menus = [
  { id:0, title:'首页', url:'/', icon:'el-icon-s-home', children:[] },
  { id:1, title:'应急信息管理', url:'', icon:'el-icon-warning-outline', children:[
      { url: '/emergencyplan', title: '应急预案管理' },
      { url: '', title: '应急演练管理' },
      { url: '', title: '应急通讯录管理' },
      { url: '', title: '应急事故案例库' },
      { url: '', title: '应急专家管理' },
      { url: '', title: '应急物资管理' },
  ] },
  { id:2, title:'应急信息管理', url:'', icon:'el-icon-warning-outline', children:[
      { url: '', title: '应急1' },
      { url: '', title: '应急2' },
      { url: '', title: '应急3' }
    ] }
]
