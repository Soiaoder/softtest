<template>
  <div>
    <span style="font-size:24px;"><b>实时C/S系统</b></span>
    <div style="font-size:16px;">
      <p>某实时的C/S系统，服务器端应用程序需要接受客户端发送的不同类型的数据包，为了使系统设计达到最优，使用统一接口，接口（通用包）的格式为：</p>
      <table cellspacing="0">
        <tr>
          <td style="border: 1px solid;">A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td style="border: 1px solid;">B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td style="border: 1px solid;">C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td style="border: 1px solid;">D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td style="border: 1px solid;">E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td style="border: 1px solid;">F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td style="border: 1px solid;">G&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>
      </table>
      <p>包中各段的解释如下：</p>
      <p>A：用来确定不同的包类型共有4个bit位，该系统有10种包类型，分别用0000、0001、0010、0011、0100、0101、0110、0111、1000、1001来表示；</p>
      <p>B：表示本发送包的内容字节数，共64个bit位；</p>
      <p>C：表示业务种类，表示“现金查询”，“支票查询”，“存款”，“取款”；</p>
      <p>D：是在100到999之间的数值；</p>
      <p>E：是在200和500之间或在600到900之间的数值；</p>
      <p>F：输入条件是六位字符串；</p>
      <p>G：为保留的256个bits。</p>
      <p>用等价类测试的思想，如何划分等价类？并指出强一般等价类用例的个数。</p>
    </div>
    <div style="margin-top:50px;">
      <p style="font-size:20px; font-weight:bold;">解答</p>
	  <p>等价类划分如下：</p>
      <p>A：10个有效等价类{ 0000, 0001, 0010, 0011, 0100, 0101, 0110, 0111, 1000, 1001 }，6个无效等价类{ 1010, 1011, 1100, 1101, 1110, 1111 }；</p>
      <p>B：1个有效等价类{ 0≤x≤2<sup>64</sup>-1 }，2个无效等价类{ x&lt;0, x&gt;2<sup>64</sup>-1 }；</p>
      <p>C：4个有效等价类{ 现金查询, 支票查询, 存款, 取款 }，1个无效等价类{ 其他 }；</p>
      <p>D：1个有效等价类{ 100≤x≤999 }，2个无效等价类{ x&lt;100, x&gt;999 }；</p>
      <p>E：2个有效等价类{ 200≤x≤500, 600≤x≤900 }，3个无效等价类{ x&lt;200, 500&lt;x&lt;600, x&gt;900 }；</p>
      <p>F：1个有效等价类{ 长度为6的字符串 }，2个无效等价类{ 长度小于6的字符串, 长度大于6的字符串 }；</p>
      <p>G：1个有效等价类{ 任意256-bit值 }。</p>
      <p>强一般等价类只考虑有效等价类，共有10×1×4×1×2×1×1=<b>80</b>个用例。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CSQuestion",
  components: {},
  props: {},
  data() {
	return {};
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
