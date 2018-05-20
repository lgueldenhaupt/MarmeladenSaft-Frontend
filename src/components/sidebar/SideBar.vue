<template>
    <div class="sidebar">
        <strong>Navi</strong>
        <md-list>
            <md-list-item v-on:click="routeTo('/')">
                <md-icon>movie_filter</md-icon>
                <span class="md-list-item-text">Oscars</span>
            </md-list-item>
            <md-divider></md-divider>
            <md-list-item v-on:click="routeTo('food')" >
                <md-icon>fastfood</md-icon>
                <span class="md-list-item-text">Essen</span>
            </md-list-item>

        </md-list>
    </div>
</template>

<script lang="ts" src="./SideBar.ts"></script>

<style scoped lang="scss" src="./SideBar.scss"></style>