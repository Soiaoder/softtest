<template>
    <div>
        <span style="font-size:24px;"><b>电脑销售系统</b></span>
      <div style="font-size:16px;">
        
      <p>在电脑销售系统中，使用边界值方法对以下问题进行分析，并设计测试用例：</p>
      <p>要求1：主机（25￥单位价格，每月最多销售的数量为70），显示器（30￥单位价格，每月最多销售数量为80），外设（45￥单位价格，每月最多销售的数量为90）</p>
      <p>要求2：每个销售员每月至少销售一台完整的机器，当系统的主机这个变量接受到-1值的时候，系统自动统计该销售员本月的销售总额。</p>
      <p>要求3：当销售额小于等于1000（包括1000）按照10%提佣金，当销售额在1000-1800之间（包括1800）的时候按照15%提佣金，当销售额大于1800时按照20%提佣金。</p>

</div>

    </div>

</template>

<script>

export default {
  name: "SalesQuestion",
  components: {},
  props: {},
  data() {
    return { }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {

  },
};
</script>

<style scoped lang="less">


</style>