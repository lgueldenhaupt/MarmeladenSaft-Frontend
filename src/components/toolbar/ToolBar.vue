<template>
<div class="md-toolbar-row">

  <div class="md-toolbar-section-start">
    <h2 class="md-title">MarmeladenSaft</h2>
  </div>

  <div class="md-toolbar-section-end">
    <router-link to="/">
      <md-button>Home</md-button>
    </router-link>
    <router-link to="/about">
      <md-button>About</md-button>
    </router-link>
    <md-button class="md-icon-button md-right">
      <md-icon>more_vert</md-icon>
    </md-button>
  </div>
  
</div>
</template>


<script lang="ts" src="./ToolBar.ts"></script>
<style src="./ToolBar.scss" scoped></style>
