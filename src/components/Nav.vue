<template>
  <aside class="nav" ref="navs" :class="{'closeWidth':isCollapse}">
    <ul class="menu-ul">
      <li v-for="(menu, index) in menus" :key="index" @click="currMenu(index)" :class="{'currm': currMenuIndex == index}">
        <i :class="menu.icon"></i>
        <div class="menu-name" v-if="!isCollapse">
          <router-link :to="menu.url" class="menu-a">
            <p @click="isOpenMenu(menu.children.length, index)">{{menu.title}}</p>
            <ul v-if="menu.children.length > 0 && currMenuIndex == index" :style="navUlstyle(menu.children.length)">
              <li v-for="(mchild, item) in menu.children" :key="item" @click="currChildMenu(item)" :class="{'currchildm':currChildMenuIndex == item}"><router-link :to="mchild.url">{{mchild.title}}</router-link></li>
            </ul>
            <ul v-else style="height:0px;">
              <li v-for="(mchild, item) in menu.children" :key="item" @click="currChildMenu(item)" :class="{'currchildm':currChildMenuIndex == item}"><router-link :to="mchild.url">{{mchild.title}}</router-link></li>
            </ul>
          </router-link>
          <i v-if="currMenuIndex == index" class="el-icon-arrow-down icon-rights"></i>
          <i v-else class="el-icon-arrow-right icon-rights"></i>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script>
import { menus } from '../assets/js/menu'
export default {
  name: 'Nav',
  data() {
    return {
      isCollapse:false, //是否打开导航
      menus: [], //导航数据
      currMenuIndex:0, //父导航选中的是那个
      currChildMenuIndex:0, //子导航选中的是哪个
    };
  },
  created(){
    this.menus = menus
    if(sessionStorage.getItem("curMenu")){
      this.currMenuIndex = parseInt(sessionStorage.getItem("curMenu"))
    }
  },
  computed: {
    navUlstyle (){
      return function (len){ //计算属性传参
        return {'height': len * 39 +'px'}
      }
    }
  },
  methods:{
    send(na){ //侧边栏 是否收起状态
      this.isCollapse = na //接收Header组件传过来的 值
    },
    /**
     * 菜单选择
     * @param index
     */
    currMenu(index){
      if(sessionStorage.getItem("curMenu")){
        sessionStorage.setItem("curMenu",index)
      }else{
        sessionStorage.setItem("curMenu",index)
      }
      this.currMenuIndex = index
    },
    /**
     * 子菜单选择
     * @param item
     */
    currChildMenu(item){
      this.currChildMenuIndex = item
      console.log(item)
    },
    /**
     * 是否展开 子菜单
     * @param len
     * @param index
     */
    isOpenMenu(len, index){
      console.log(len, index, this.currMenuIndex)
    }
  }
}
</script>

<style scoped>
.menu-ul>li{position:relative; display:flex; align-items:flex-start; justify-content:flex-start; cursor:pointer;}
.menu-ul>li:hover{background-color:#182445; color:#fff;}
.menu-ul>li,.menu-ul>li>a,.menu-name>a{color:#a6bfca; transition:color .3s;}
.menu-ul>li>i,.menu-name>i{font-size:18px;}
.menu-ul>li>a{margin-left:5px; margin-left:10px;}
.menu-ul>li:hover .menu-name>a{color:#fff;}
.menu-name{width:100%; padding-left:15px; display:flex; align-items:flex-start; justify-content:space-between;}
.menu-name>a{font-size:14px; width:100%;}

a.menu-a>ul{height:0px; overflow:hidden; transition:height .3s;}
a.menu-a>ul>li>a{color:#a6bfca; display:block; position:relative; width:100%; padding:10px; font-size:13px;}
a.menu-a>ul>li>a:hover{color:#fff;}

li.currm{background-color:#182445; color:#fff;}
li.currm>a,li.currm>i,li.currm>.menu-name>a,li.currm>.menu-name{color:#fff;}
li.currchildm,li.currchildm>a{color:#fff !important;}
</style>
