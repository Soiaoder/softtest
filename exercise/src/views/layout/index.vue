<template>
  <el-container class="layout-container">
    <el-aside class="aside" width="auto">
      <SideBar class="aside-menu" :is-collapse="isCollapse" />
    </el-aside>
    <el-container direction="vertical">
      <HeaderBar @changeCollapse="changeCollapse" />
      <el-main style="height: 100px" class="main"><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './components/sidebar'
import HeaderBar from './components/headerbar'
export default {
  name: 'LayoutIndex',
  components: {
    SideBar,
    HeaderBar,
  },
  props: {},
  data() {
    return {
      isCollapse: false,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    },
  },
}
</script>

<style scoped lang="less">
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.aside {
  background-color: #d3dce6;
  .aside-menu {
    height: 100%;
  }
}
.main {
  background-color: #e9eef3;
}
</style>
