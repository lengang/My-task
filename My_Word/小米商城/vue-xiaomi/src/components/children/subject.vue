<template>
  <div class="subject">
    <header id="hed">
      <img src="../../assets/imgs/logo.png" alt="" />
      <div class="center">
        <ul>
          <li>首页</li>
          <li>全部商品</li>
          <li>关于我们</li>
        </ul>
      </div>
      <div>
        <el-input
          placeholder="请输入内容"
          v-model="input1"
          style="width: 270px"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
    };
  },
};
</script>

<style scoped>
.subject {
  width: 90%;
  /* background-color: red; */
  margin: auto;
}
#hed {
  margin: 20px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 70px;
  padding: 0 20px;
}
ul {
  display: flex;
}
li {
  list-style: none;
  font-size: 16px;
  margin: 0 10px;
  /* background-color: red; */
  height: 60px;
}
li:hover {
  border-bottom: 2px solid #000;
}

.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
