<template>
  <div>
    <span style="font-size:24px;"><b>ERP系统</b></span>
    <div style="font-size:16px;">
      <p>下图是ERP系统的流图，根据系统需求和流程图，归纳出比较清晰的主、备选流关系图，并基于主、备选流设计场景和相应的测试用例。</p>
      <p>MPS(Master Production Schedule)，MRP(Manufacturing Resource Planning)</p>
      <img style="width:360px;height:auto;" src="./img/erp.png" />
    </div>
    <div style="margin-top:50px;">
      <p style="font-size:20px; font-weight:bold;">解答</p>

      <p><b>基本流、备选流关系图：</b></p>
      <img style="width:500px;height:auto;" src="./img/flowchart.png" />

      <p><b>基本流：</b></p>
      <p>销售合同->计划需求->MPS计算->主生产计划->MRP计算->
        计划请购单->计划采购订单->采购订单->采购到货处理->采购质检->采购入库->
        计划生产订单->车间作业计划->生产工序管理->工序转移->完工处理->生产质检->
        生产入库->销售发货处理->合同结案</p>

      <p><b>备选流：</b></p>
      <p>备选流1：可用库存已满足销售需求</p>
      <p>备选流2：已有足够的可用库存</p>
      <p>备选流3：可用库存已满足生产需求</p>
      <p>备选流4：采购的货物不合格</p>
      <p>备选流5：生产的货物不合格</p>
      <p>备选流6：生产的货物是废品</p>
      <p>备选流7：货物未发完</p>

      <p><b>基于基本流和备选流设计的场景：</b></p>
      <el-table :data="flowData" style="width: 100%;font-size:12px;">
        <el-table-column prop="scene" label="场景" width="480"></el-table-column>
        <el-table-column prop="description" label="说明" width="480"></el-table-column>
      </el-table>

      <p><b>相应的测试用例：</b></p>
      <el-table :data="useCaseData" style="width: 100%;font-size:12px;">
        <el-table-column prop="id" label="用例编号" width="100" align="center"></el-table-column>
        <el-table-column prop="scene" label="场景" width="175" align="center"></el-table-column>
        <el-table-column prop="inventory_sale" label="可用库存是否满足销售需求" width="174" align="center"></el-table-column>
        <el-table-column prop="inventory" label="是否有可用库存" width="174" align="center"></el-table-column>
        <el-table-column prop="inventory_production" label="可用库存是否满足生产需求" width="174" align="center"></el-table-column>
        <el-table-column prop="purchase" label="采购是否合格" width="174" align="center"></el-table-column>
        <el-table-column prop="production" label="生产合格情况" width="174" align="center"></el-table-column>
        <el-table-column prop="shipment" label="货是否发完" width="174" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ERPQuestion",
  components: {},
  props: {},
  data() {
    return {
      flowData: [{
        scene: "场景1—经过采购、生产、销售流程，合同成功结案",
        description: "基本流。",
      },
      {
        scene: "场景2—可用库存已满足销售需求",
        description: "基本流，备选流1；基本流。",
      },
      {
        scene: "场景3—已有足够的可用库存",
        description: "基本流，备选流2；基本流。",
      },
      {
        scene: "场景4—可用库存已满足生产需求",
        description: "基本流，备选流3；基本流。",
      },
      {
        scene: "场景5—采购的货物不合格",
        description: "基本流，备选流4；基本流。",
      },
      {
        scene: "场景6—生产的货物不合格",
        description: "基本流，备选流5；基本流。",
      },
      {
        scene: "场景7—生产的货物是废品",
        description: "基本流，备选流6；基本流。",
      },
      {
        scene: "场景8—货物未发完",
        description: "基本流，备选流7；基本流。",
      },
      {
        scene: "场景9—已有足够的可用库存，货物多次未发完",
        description: "基本流，备选流2；基本流，备选流7；基本流，备选流7；基本流。",
      },        
      {
        scene: "场景10—可用库存已满足生产需求，生产的货物不合格",
        description: "基本流，备选流3；基本流，备选流5；基本流。",
      },
      {
        scene: "场景11—采购的货物不合格，生产的货物是废品",
        description: "基本流，备选流4；基本流，备选流6；基本流。",
      },
      ],
      useCaseData: [{
        id: "1",
        scene: "场景1",
        inventory_sale: "否",
        inventory: "否",
        inventory_production: "否",
        purchase: "是",
        production: "合格",
        shipment: "是",
      },
      {
        id: "2",
        scene: "场景2",
        inventory_sale: "是",
        inventory: "n/a",
        inventory_production: "n/a",
        purchase: "n/a",
        production: "n/a",
        shipment: "是",
      },
      {
        id: "3",
        scene: "场景3",
        inventory_sale: "否",
        inventory: "是",
        inventory_production: "n/a",
        purchase: "n/a",
        production: "n/a",
        shipment: "是",
      },
      {
        id: "4",
        scene: "场景4",
        inventory_sale: "否",
        inventory: "否",
        inventory_production: "是",
        purchase: "n/a",
        production: "合格",
        shipment: "是",
      },
      {
        id: "5",
        scene: "场景5",
        inventory_sale: "否",
        inventory: "否",
        inventory_production: "否",
        purchase: "否",
        production: "合格",
        shipment: "是",
      },
      {
        id: "6",
        scene: "场景6",
        inventory_sale: "否",
        inventory: "否",
        inventory_production: "否",
        purchase: "是",
        production: "不合格",
        shipment: "是",
      },
      {
        id: "7",
        scene: "场景7",
        inventory_sale: "否",
        inventory: "否",
        inventory_production: "否",
        purchase: "是",
        production: "废品",
        shipment: "是",
      },
      {
        id: "8",
        scene: "场景8",
        inventory_sale: "否",
        inventory: "否",
        inventory_production: "否",
        purchase: "是",
        production: "合格",
        shipment: "否",
      },
      {
        id: "9",
        scene: "场景9",
        inventory_sale: "否",
        inventory: "是",
        inventory_production: "n/a",
        purchase: "n/a",
        production: "n/a",
        shipment: "否(2次)",
      },
      {
        id: "10",
        scene: "场景10",
        inventory_sale: "否",
        inventory: "否",
        inventory_production: "是",
        purchase: "n/a",
        production: "不合格",
        shipment: "是",
      },
      {
        id: "11",
        scene: "场景11",
        inventory_sale: "否",
        inventory: "否",
        inventory_production: "否",
        purchase: "否",
        production: "废品",
        shipment: "是",
      }
      ],
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
