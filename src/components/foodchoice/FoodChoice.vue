<template>
    <div id="foodChoice">
        <h1>Lecka Essen</h1>

        <input v-on:keyup.enter="addSuggestion($event.srcElement.value); $event.srcElement.value = ''"/>

        <div v-for="suggestion in suggestions" v-on:click="deleteSuggestion(suggestion)">
            {{suggestion}}
        </div>

    </div>
    
</template>

<script lang="ts" src="./FoodChoice.ts"></script>

<style scoped lang="scss" src="./FoodChoice.scss"></style>