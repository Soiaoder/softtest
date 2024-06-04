<template>
  <div>
    <span style="font-size:24px;"><b>ATM系统</b></span>
    <div style="font-size:16px;">
      <p>构建ATM系统的state transition diagram，利用state transition testing方法将其转换成transition tree，而后基于transition
        tree的路径设计测试用例，要考虑robustness。</p>
    </div>
    <div style="margin-top:50px;">
      <p style="font-size:20px; font-weight:bold;">解答</p>
      <p>State Transition Diagram：</p>
      <img style="width:500px;height:auto;" src="./img/state_transition_diagram.png" />
      <p>Transition Tree：</p>
      <img style="width:500px;height:auto;" src="./img/transition_tree.png" />
      <p>测试用例：</p>
      <el-table :data="questionData" style="width: 100%">
        <el-table-column prop="id" label="用例编号" width="120"></el-table-column>
        <el-table-column prop="path" label="路径"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ATMQuestion",
  components: {},
  props: {},
  data() {
    return {
      questionData: [{
        id: "TS1",
        path: "空闲->验证卡->退卡->空闲",
      },
      {
        id: "TS2",
        path: "空闲->验证卡->等待输入密码->退卡->空闲",
      },
      {
        id: "TS3",
        path: "空闲->验证卡->等待输入密码->验证密码->等待选择业务->退卡->空闲",
      },
      {
        id: "TS4",
        path: "空闲->验证卡->等待输入密码->验证密码->等待选择业务->取款->等待选择业务",
      },
      {
        id: "TS5",
        path: "空闲->验证卡->等待输入密码->验证密码->等待选择业务->查询余额->等待选择业务",
      },
      {
        id: "TS6",
        path: "空闲->验证卡->等待输入密码->验证密码->等待选择业务->存款->等待选择业务",
      },
      {
        id: "TS7",
        path: "空闲->验证卡->等待输入密码->验证密码->等待输入密码",
      },
      {
        id: "TS8",
        path: "空闲->验证卡->等待输入密码->验证密码->等待输入密码->验证密码->等待输入密码->验证密码->吞卡->空闲",
      }],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
</style>
