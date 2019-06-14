<template>
  <div class="container">
    <div class="module">
      <h4 class="module-name">应急预案管理</h4>
      <div class="content">

        <div class="main-top">
          <div class="search">
            <label>预案名称：</label>
            <div class="search-content"><el-input placeholder="请输入内容" v-model="search.name" clearable></el-input></div>
            <label>预案类型：</label>
            <div class="search-content">
              <el-select v-model="search.type" clearable placeholder="请选择">
                <el-option v-for="(tp,item) in eType" :key="item" :label="tp.name" :value="tp.name">
                </el-option>
              </el-select>
            </div>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
          <div class="manipulation">
            <router-link to="/new" class="new-ep"><el-button type="primary" icon="el-icon-plus">新建</el-button></router-link>
            <router-link to=""><el-button type="primary" icon="el-icon-delete">删除</el-button></router-link>
          </div>
        </div>

        <div class="content-box">
          <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width:100%" @selection-change="handleSelectionChange">
            <!--select-->
            <el-table-column type="selection" width="55"> </el-table-column>
            <!--序号-->
            <el-table-column label="序号" width="100">
              <template slot-scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <!--预案名-->
            <el-table-column prop="name" label="预案名"> </el-table-column>
            <!--版本号-->
            <el-table-column prop="version" label="版本号" show-overflow-tooltip> </el-table-column>
            <!--预案类型-->
            <el-table-column prop="type" label="预案名"> </el-table-column>
            <!--创建人-->
            <el-table-column prop="founder" label="创建人"> </el-table-column>
            <!--状态-->
            <el-table-column prop="status" label="状态"> </el-table-column>
            <!--操作-->
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">取消选择</el-button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { selectJosn } from '../../assets/js/tempData'
import { tableData } from '../../assets/js/tempData'
export default {
  name: 'EmergencyPlan',
  data(){
    return{
      search: {name:'', type:''},
      eType: [],
      tableData:[],
      multipleSelection: []
    }
  },
  created(){
    this.eType = selectJosn
    this.tableData = tableData
  },
  methods:{
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    /**
     * 编辑
     * @param index
     * @param row
     */
    handleEdit(index, row) {
      console.log(index, row);
    },
    /**
     * 删除
     * @param index
     * @param row
     */
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>
<style src="../../assets/css/emergency.css" scoped></style>
<style scoped>

</style>
