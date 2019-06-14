<template>
  <div class="container">
    <div class="module">
      <h4 class="module-name">新建信息</h4>
      <div class="content">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="first"></el-tab-pane>
          <el-tab-pane label="预案内容" name="second"></el-tab-pane>
          <el-tab-pane label="应急组织" name="third"></el-tab-pane>
          <el-tab-pane label="应急资源" name="fourth"></el-tab-pane>
        </el-tabs>
        <div class="content-box">
          <transition name="fade">
            <router-view/>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'New',
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      let $this = this
      console.log(tab.index)
      switch (parseInt(tab.index)) {
        case 0:
          $this.$router.push({path:'/newbasicinfo'})
          break
        case 1:
          $this.$router.push({path:'/plancontent'})
          break
        case 2:
          $this.$router.push({path:'/egyorgan'})
          break
        case 3:
          $this.$router.push({path:'/egyresource'})
          break
      }
    }
  }
}
</script>

<style src="../../../assets/css/emergency.css" scoped></style>
<style scoped>
</style>
