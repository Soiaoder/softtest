<template>
  <div>
    <span style="font-size: 24px"><b>&nbsp;万年历问题</b></span>
    <div style="font-size: 14px">
      <p>问题描述：
        以"yyyy-mm-dd"的形式输入一个日期，则系统会输出下一天
        其中输入的日期应该是一个合法日期，若不是合法日期，则系统输出error
      </p>
      <p>
        要求1：边界值方法分别分析和设计测试用例
      </p>
      <p>
        要求2：等价类方法分别分析和设计测试用例
      </p>
      <p>
        要求3：用决策表设计测试用例，将年份分为：非闰年，被4整除不被100整除的闰年和被400整除的闰年
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarQuestion",
  components: {},
  props: {},
  data() {
    return {
    };
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