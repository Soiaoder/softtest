<template>
  <div style="height: 100%" ref="tabs">
    <el-card id="main-card" style="height: 100%" shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="问题描述" name="first">
          <SalesQuestion />
        </el-tab-pane>

        <el-tab-pane
          class="main-container"
          label="系统测试用例测试"
          name="second"
        >
          <SystemTest :parentHeight="parentHeight" />
        </el-tab-pane>

        <el-tab-pane label="单测试用例输入" name="third">
          <SingleCase />
        </el-tab-pane>

      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import SalesQuestion from "./question";
import SystemTest from "./systemtest";
import SingleCase from "./singlecase";


export default {
  name: "Computer",
  components: {
    SalesQuestion,
    SystemTest,
    SingleCase,
  },
  props: {},
  data() {
    return {
      activeName: "first",
      parentHeight: 3333,
    };
  },
  computed: {},
  watch: {},
  created() {
    window.addEventListener("resize", this.getHeight);
  },
  mounted() {},
  methods: {
    getHeight() {
      try {
        this.parentHeight = this.$refs.tabs.offsetHeight;
      } catch (err) {}
    },
  },
};
</script>

<style scoped lang="less">
</style>
