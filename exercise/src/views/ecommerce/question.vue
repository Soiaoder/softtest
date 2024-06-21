<template>
    <div>
        <span style="font-size:24px;"><b>&nbsp;电商平台系统</b></span>
      <div style="font-size:16px;">
        
      <p >题目：边界值测试可以适用于function(method) level，class level,，system level，分析电商平台系统测试时考虑的边界值情况。</p>

</div>

  <p style="margin-top:100px;font-size:20px;">1. 电商平台系统介绍</p>
  <p>1.1 功能概述</p>
  <p>    电商平台系统是一个提供给用户进行在线购物的系统，涵盖从用户注册、商品浏览、到订单支付和售后服务的全流程功能。用户可以通过注册和登录系统，管理个人账户信息</p>
  <p>信息，包括收货地址和联系方式；平台支持卖家发布商品，包含详细的商品描述、价格、库存和分类，方便用户通过浏览和搜索功能找到所需商品。购物车功能允许用户添加和管</p>
  <p>理购买的商品，确认无误后可以提交订单并选择多种支付方式进行支付。订单确认后，系统会生成详细的订单信息，并通过物流管理模块跟踪发货状态，用户可以实时查看物流信</p>
  <p>息。售后服务功能为用户提供退换货、投诉和咨询的渠道，确保购物体验的完整和满意。</p>
  <p>1.2 主要功能划分</p>
  <p>注册：用户注册平台账号</p>
  <p>登陆：用户使用已有的账号进入系统</p>
  <p>加入购物车：用户将想要购买的物品加入到购物车中</p>
  <p>添加地址：用户添加收货地址</p>
  <p>支付订单：用户对已经下的订单进行支付</p>
  <p>取消订单：用户对已经下的订单进行取消操作</p>
  <p>评价：用户对所购买的商品进行评价</p>
  <p>申请退款：用户对已经购买的商品申请退款</p>
  <p style="margin-top:100px;font-size:20px;">2. Function Level 边界值情况分析</p>
  <p>系统中用户的用户名长度存在限制</p>
  <p>系统中用户的密码长度存在限制</p>
  <p>用户的邮箱格式、联系方式格式存在限制</p>
  <p>商家进行商品发布时的商品价格、商品数量、库存数量等信息存在上下限限制</p>
  <p>用户购物车内物品数量存在限制</p>
  <p style="margin-top:100px;font-size:20px;">3. Class Level 边界值情况分析</p>
  <p>类之间的调用存在边界限制</p>
  <p style="margin-top:100px;font-size:20px;">4. System Level 边界值情况分析</p>
  <p >4.1 功能测试</p>
  <p>测试依据为需求文档及需求分析文档，验证产品功能是否符合需求。</p>
<el-table
      :data="questionData"
      style="width: 60%;font-size:12px;"
      >
      <el-table-column
        prop="minute"
        label=""
        width="140"
        align="center">
      </el-table-column>
      <el-table-column
        prop="times"
        label="正常情况"
        width="240"
        align="center">
      </el-table-column>
      <el-table-column
        prop="level"
        label="边界值"
        align="center">
      </el-table-column>
    </el-table>
<p style="margin-top:50px;">4.2 非功能需求</p>
<p>响应时间测试：系统响应时间应在限制标准之内</p>
<p>故障恢复测试：当系统出现故障时，应在限制时间内恢复</p>
<p>压力测试：双十一等促销活动期间会导致访问人数过大，系统应当承载的访问人数限制</p>
<p>除此之外，还有安全性测试、数据备份测试、兼容性测试、可维护性测试等</p>


    </div>



</template>

<script>

export default {
  name: "SalesQuestion",
  components: {},
  props: {},
  data() {
    return {questionData:[{
          minute:"注册",
          times:"注册成功",
          level:"输入的手机验证码有误，重新发送验证码时间限制；验证码填写时效限制",

        },{
          minute:"登录",
          times:"登录成功",
          level:"账号/密码有误，重新输入次数限制",
        },{
          minute:"加入购物车",
          times:"加入成功",
          level:"购物车内的商品数量限制",
        },{
          minute:"支付订单",
          times:"支付成功",
          level:"支付订单时间限制；订单所需付款额限制",
        },{
          minute:"添加地址",
          times:"添加成功",
          level:"地址有效性限制；用户收货地址数量限制",
        },{
          minute:"取消订单",
          times:"取消成功",
          level:"取消订单时间限制；用户一天内取消订单次数限制",
        },
        {
          minute:"申请退款",
          times:"申请成功",
          level:"申请退款原因选择限制；商品是否可以申请退款限制",
        },
        {
          minute:"评价",
          times:"评价成功",
          level:"可评价时间限制；评价星级限制；评价内容字数限制；评价图片数量限制",
        },
       
        ], }
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