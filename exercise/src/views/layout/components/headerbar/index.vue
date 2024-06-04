<template>
  <el-header class="header">
    <div>
      <i class="el-icon-s-fold" @click="changeCollapse" style="margin-right: 20px"></i>
      <span>软件测试平台</span>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'HeaderBar',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    changeCollapse() {
      this.$emit('changeCollapse', 0)
    },
  },
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar {
    margin-right: 10px;
  }
}
</style>
