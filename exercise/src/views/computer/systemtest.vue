<template>
  <div class="system-test">
    <div class="main-header">
      <div class="button-group">
        <el-button
          class="main-button"
          type="success"
          plain
          @click="doTest"
          :loading="loading"
          >进行测试<i class="el-icon--right"></i
        ></el-button>
        <el-button
          @click="reset(value)"
          class="reset-button"
          type="warning"
          plain
          >重置</el-button
        >
      </div>
    </div>

    <el-divider content-position="right">测试用例</el-divider>

    <div class="main-table">
      <el-table
        :data="tableData"
        :height="tableHeight"
        border
        style="width: 100%"
        v-loading="loading"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          prop="id"
          label="测试用例编号"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="M"
          label="主机销售量"
          width="240"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="I"
          label="显示器销售量"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="P"
          label="外设销售量"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="pre_amount"
          label="预计销售额"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="pre_earn"
          label="预计佣金"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="A"
          label="实际销售额"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="E"
          label="实际佣金"
          align="center"
        ></el-table-column>
        <el-table-column
            prop="state"
            label="测试结果"
            align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import mock_1_json from "@/mock/sales/sales_mock.json";
export default {
  name: "SystemTest",
  components: {},
  props: ["parentHeight"],
  data() {
    return {
      value: "1",
      tableData: [],
      loading: false,
      classState: [],
    };
  },
  computed: {
    tableHeight() {
      return this.parentHeight - 260 > 500 ? 500 : this.parentHeight - 260;
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.reset(newVal);
      },
      immediate: false,
    },
  },
  created() {},
  mounted() {
    this.initTableData(mock_1_json);
  },
  methods: {
    initTableData(json) {
      this.classState = [];
      this.tableData = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["A"] = "";
        newData["S"] = "";
        newData["E"] = "";
        newData["state"] = null;
        this.tableData.push(newData);
      });
    },
    tableRowClassName({ row, rowIndex }) {
      return this.classState[rowIndex];
    },
    doTest() {
      this.tableData.forEach((item) => {
        let m = item.M
        let i = item.I
        let p = item.P
        let res1 = 0.0
        let res2 = 0.0
        if(m <= 0 || i <= 0 || p <= 0 || m > 70 || i > 80 || p > 90){
          res1 = -1
          res2 = -1
        }
        else {
          res1 = m * 25 + i * 30 + p * 45
          if(res1 <= 1000){
            res2 = res1 * 0.1
          }
          else if(res1 <= 1800){
            res2 = res1 * 0.15
          }
          else {
            res2 = res1 * 0.2
          }
          res2 = Math.round(res2 * 100) / 100
        }
        item.A = res1
        item.E = res2
        if(res1 == parseFloat(item.pre_amount) && res2 == parseFloat(item.pre_earn)){
          item.state = "测试通过"
        }
        else {
          item.state = "测试未通过"
        }
      })
    },
    reset(value) {
      if (value === "1") {
        this.json = mock_1_json;
        this.initTableData(mock_1_json);
      } else if (value === "2") {
        this.json = mock_2_json;
        this.initTableData(mock_2_json);
      } else {
        this.json = mock_3_json;
        this.initTableData(mock_3_json);
      }
    },
  },
};
</script>

<style scoped lang="less">
/deep/ .el-table .error-row {
  background: #fff0f0;
}
/deep/ .el-table .success-row {
  background-color: #f7fff9;
}
.main-button {
  width: 500px;
  margin-top: 10px;
}
.reset-button {
  width: 200px;
  margin-top: 10px;
}
.main-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:20px;
}
.main-table{
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
