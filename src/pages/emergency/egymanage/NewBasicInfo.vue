<template>
  <div class="newbox">
    <div class="new-contents">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="预案名称" prop="name">
          <el-col :span="13">
            <el-form-item prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="版本号" prop="version">
              <el-input v-model="ruleForm.version"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="预案类型" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择预案类型">
            <el-option label="预案类型一" value="shanghai"></el-option>
            <el-option label="预案类型二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="预案状态" prop="status">
          <el-select v-model="ruleForm.status" placeholder="请选择预案状态">
            <el-option label="预案状态一" value="shanghai"></el-option>
            <el-option label="预案状态二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="编制人" required>
          <el-col :span="13">
            <el-form-item prop="braidp">
              <el-input v-model="ruleForm.braidp"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date1" label="编制时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width:100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存信息</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewBasicInfo',
  data(){
    return{
      msg:'新建基本信息',
      ruleForm: {
        name: '', //预案名
        version: '', //版本号
        type: '', //预案类型
        status:'', //预案状态
        braidp: '', //编制人
        date1: '', //编制时间
        desc: '' //描述
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        version: [
          { required: true, message: '请输入版本号', trigger: 'blur' },
        ],
        type: [
          { required: true, message: '请选择预案类型', trigger: 'change' }
        ],
        status: [
          { required: true, message: '请选择预案状态', trigger: 'change' }
        ],
        braidp: [
          { required: true, message: '请输入编制人', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>
<style src="../../../assets/css/new.css" scoped></style>
<style scoped>

</style>
