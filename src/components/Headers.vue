<template>
  <header class="headers">
    <a href="" class="headers-left" :class="{'closeWidth':isCollapse}">
      <span> <!--<img src="../assets/img/logo.png" alt="图片加载失败" />--> <h2>Admin</h2> </span>
    </a>
    <nav class="headers-right" :class="{'closeMargin':isCollapse}">
      <div class="menu-switch" @click="menuSwitch">
        <img src="../assets/img/switch.png" :class="{'menuclosed':!isCollapse}" alt="图片加载失败" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Headers',
  data() {
    return {
      isCollapse:false
    };
  },
  methods: {
    menuSwitch(){
      this.isCollapse = !this.isCollapse
      this.$emit('tmpEvn', this.isCollapse) //传值给父组件
      this.$emit('navEvn',this.isCollapse) //传值给nav组件
    }
  }
}
</script>

<style scoped>

</style>
