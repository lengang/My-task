<template>
  <div>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <div class="Box_name">小米商城</div>
          <ul>
            <li>
              <span class="login"> 登录 </span>|
              <span> 注册 </span>
            </li>
            <li>我的订单</li>
            <li>我的收藏</li>
            <li>
              <button>购物车</button>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.grid-content {
  background-color: rgb(43, 41, 41);
  height: 40px;
  color: #ccc;
  padding-right: 40px;
  position: relative;
}

button {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100px;
  height: 30px;
  border-radius: 6px;
  color: #ccc;
}
li {
  list-style: none;
  margin: 0 10px;
}
ul {
  float: right;
  height: 100%;
  line-height: 40px;
  display: flex;
}
.Box_name {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: rgb(199, 168, 84);
}
</style>
