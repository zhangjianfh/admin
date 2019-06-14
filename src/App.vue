<template>
  <div id="app">
    <Headers @tmpEvn="tstEvn" @navEvn="navEvn" />
    <Nav ref="navs" />
    <div class="middle" :class="{'closeMargin':isCollapse}">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Headers from './components/Headers'
import Nav from './components/Nav'
export default {
  name: 'App',
  components: { Headers:Headers, Nav:Nav },
  template: '<Headers /> <Nav />',
  data() {
    return {
      isCollapse:false
    };
  },
  methods: {
    tstEvn(wd){
      this.isCollapse = wd
    },
    navEvn(){
      this.$refs.navs.send(this.isCollapse) //Header 组件 通过父组件 传值给Nav组件
    }
  }
}
</script>

<style>
#app { font-family:'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
.el-menu-vertical-demo:not(.el-menu--collapse){ width:200px; min-height:400px; }
.el-radio-button__inner{padding:0px;}
.el-radio-button__inner>span{display:inline-block; padding:12px 20px;}
.el-menu{border-right:0px;}

.fade-enter-active, .fade-leave-active { opacity:1; transition:opacity .5s;}
.fade-enter, .fade-leave-to{ opacity:0; }
</style>
