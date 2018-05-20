<template>
    <div id="app">
        <div class="md-layout">
            <div class="md-layout-item md-size-10 sidebar_layout fixed_on_top">
                <SideBar style="background-color: #2c3e50"></SideBar>
            </div>
            <div class="md-layout-item">
                <ToolBar></ToolBar>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
