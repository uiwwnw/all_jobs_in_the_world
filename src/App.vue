<template>
  <el-container id="app">
    <Sidebar width="100px"/>
    <el-container>
      <Topbar />

      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
import Topbar from "./components/Topbar.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "app",
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style>
html ,
body ,
#app {
  height: 100%;
}
</style>
