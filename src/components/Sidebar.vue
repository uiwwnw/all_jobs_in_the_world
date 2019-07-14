<template>
  <el-aside width="">
      <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span>공고</span>
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-search"></i>
        <span>검색</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-user"></i>
        <span>내정보</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span>설정</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>

export default {
  name: 'sidebar',
};
</script>
<style lang="scss" scoped>
.el-aside { 
    ul {
        height: 100%;
    }
}
</style>

