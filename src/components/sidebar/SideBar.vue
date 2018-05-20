<template>
  <div>
    <md-list>

      <router-link to="/">
        <md-list-item>
          <md-icon>movie_filter</md-icon>
          <span class="md-list-item-text">Oscars</span>
        </md-list-item>
      </router-link>

      <router-link to="/food">
        <md-list-item>
          <md-icon>fastfood</md-icon>
          <span class="md-list-item-text">Essen</span>
        </md-list-item>
      </router-link>

    </md-list>
  </div>

</template>

<script lang="ts" src="./SideBar.ts"></script>

<style scoped lang="scss" src="./SideBar.scss" scoped></style>
