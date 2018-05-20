<template>
<div id="app" class="page-container">

  <!-- FIXME md-waterfall funzt nicht -->
  <md-app md-waterfall md-mode="fixed">

    <md-app-toolbar class="md-primary">
      <ToolBar></ToolBar>
    </md-app-toolbar>

    <md-app-drawer md-permanent="clipped">
      <SideBar></SideBar>
    </md-app-drawer>

    <!-- FIXME md-content 100% height deshalb hört die border beim scrollen
      irgendwann auf... ist aber in den docs beispielen auch so :D -->
    <md-app-content>
      <router-view/>
    </md-app-content>

  </md-app>
</div>
</template>

<script lang="ts" src="./App.ts" scoped></script>
<style lang="scss" src="./App.scss"></style>
