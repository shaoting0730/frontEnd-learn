<template>
    <el-container>
      <el-aside width="200px">
         <el-menu router class="el-menu-vertical-demo" >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/index">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/application">
              <i class="el-icon-menu"></i>
              <span slot="title">应用管理</span>
            </el-menu-item>
            <el-menu-item index="/config">
              <i class="el-icon-document"></i>
              <span slot="title">配置管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
      </el-aside>
      <el-container>
        <el-header>头</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      isCollapse: true
    }
  }
}
</script>

<style scoped>

</style>
