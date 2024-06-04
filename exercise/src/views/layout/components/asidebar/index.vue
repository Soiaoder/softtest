<template>
  <el-menu
    class="el-menu-vertical-demo"
    default-active="2"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :default-openeds="openeds"
    router
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>课程练习</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/triangle">1.判断三角形类型</el-menu-item>
        <el-menu-item index="/calendar">2.万年历问题</el-menu-item>
        <el-menu-item index="/employee">3.员工年终考评</el-menu-item>
        <el-menu-item index="/computer">4.电脑销售系统</el-menu-item>
        <el-menu-item index="/ecommerce">5.电商平台系统</el-menu-item>
        <el-menu-item index="/telecom">6.电信收费问题</el-menu-item>
        <el-menu-item index="/cs">7.实时C/S系统</el-menu-item>
        <el-menu-item index="/atm">8.ATM系统</el-menu-item>
        <el-menu-item index="/erp">9.ERP系统</el-menu-item>
        <el-menu-item index="/web">10.实时Web系统</el-menu-item>
        <el-menu-item index="/program">11.构建程序图</el-menu-item>
        <el-menu-item index="/sales">12.销售员佣金</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'AsideBar',
  components: {},
  props: ['is-collapse'],
  data() {
    return {
      openeds: ['1'],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item:hover {
  background-color: #cde8ff !important;
}
</style>
