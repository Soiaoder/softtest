<template>
  <div>
    <span style="font-size: 24px"><b>销售系统</b></span>
    <div style="font-size: 16px">
      <p>
        一销售系统，如果销售员的年销售额大于200万RMB且请假天数不超过10天的情况下，现金到帐大于等于60%，则佣金（提成）系数为7，即佣金值为销售额除以佣金系数；现金到帐小于60%，佣金不予计算。所有其他情况且现金到帐小于等于85%，则按佣金系数均为6计算佣金，现金到账大于85%，佣金系数按5处理。
      </p>
      <p>
        根据题意设计流程图并设计测试用例实现白盒测试（White Box
        Test）的1）语句覆盖，2）判断覆盖，3）条件覆盖，4）判断—条件覆盖，5）条件组合覆盖（测试用例及覆盖表示要清晰）。
      </p>
    </div>
    <img src="./16.png" />
    <p style="margin-top: 50px">语句覆盖：</p>
    <p style="margin-top: 50px">确保所有语句至少执行一次。</p>
    <img src="./16-1.png" />
    <p style="margin-top: 50px">判断覆盖：</p>
    <p style="margin-top: 50px">确保每个判断（分支）至少执行一次为 true 和一次为 false。</p>
    <img src="./16-2.png" />
    <p style="margin-top: 50px">条件覆盖：</p>
    <p style="margin-top: 50px">对于第一个判断语句，有以下取值</p>
    <img src="./16-3-1.png" />
    <p style="margin-top: 50px">对于第二个判断语句，有以下取值</p>
    <img src="./16-3-2.png" />
    <p style="margin-top: 50px">对于第三个判断语句，有以下取值</p>
    <img src="./16-3-3.png" />
    <p style="margin-top: 50px">对于第四个判断语句，有以下取值</p>
    <img src="./16-3-4.png" />
    <p style="margin-top: 50px">确保每个布尔表达式的每个子表达式（条件）至少执行一次为 true 和一次为 false。</p>
    <img src="./16-3.png" />
    <p style="margin-top: 50px">判断——条件覆盖：</p>
    <p style="margin-top: 50px">确保每个判断和每个条件都满足 true 和 false。</p>
    <img src="./16-4.png" />
    <p style="margin-top: 50px">条件——组合覆盖：</p>
    <p style="margin-top: 50px">确保所有可能的条件组合都至少执行一次。</p>
    <img src="./16-5-1.png" />
    <p style="margin-top: 50px">根据以上组合，设计以下测试用例</p>
    <img src="./16-5-2.png" />
  </div>
</template>

<script>
export default {
  name: 'SalesQuestion',
  components: {},
  props: {},
  data() {
    return {
      questionData: [
        {
          con: '销售额>2000000',
          t: 'T1',
          f: 'F1',
        },
        {
          con: '请假天数<=10 ',
          t: 'T2',
          f: 'F2',
        },
        {
          con: '现金到账<=0.85',
          t: 'T3',
          f: 'F3',
        },
        {
          con: '现金到账>=0.6',
          t: 'T4',
          f: 'F4',
        },
        {
          con: '销售额<0',
          t: 'T5',
          f: 'F5',
        },
        {
          con: '请假天数<0',
          t: 'T6',
          f: 'F6',
        },
        {
          con: '现金到账<0',
          t: 'T7',
          f: 'F7',
        },
      ],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less"></style>
