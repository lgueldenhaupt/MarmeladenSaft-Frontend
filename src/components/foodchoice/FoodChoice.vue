<template>
  <div id="foodChoice">

    <div class="md-layout">

      <div class="md-layout-item">
        <form novalidate class="md-layout">
          <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
              <div class="md-title">Essen</div>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field>
                    <label for="name">Vorschlag zur Güte</label>
                    <md-input name="name" id="name" v-model="newSuggestion.suggestion" @keyup.enter.native="addSuggestion()"/>
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field>
                    <label for="link">Link</label>
                    <md-input name="link" id="link" v-model="newSuggestion.link" @keyup.enter.native="addSuggestion()"/>
                  </md-field>
                </div>
              </div>
            </md-card-content>

            <md-card-actions>
              <md-button class="md-primary" v-on:click="addSuggestion()" @keyup.enter.native="addSuggestion()">Erstelle den leckeren Vorschlag</md-button>
            </md-card-actions>
          </md-card>

        </form>
      </div>

      <div class="md-layout-item">
        <md-list class="md-double-line">
          <md-list-item v-for="(suggestion, index) in suggestions">
            <div class="md-list-item-text">
              <span>{{suggestion.suggestion}}</span>
              <span>{{suggestion.link}}</span>
            </div>
            <md-button class="md-icon-button md-list-action" @click="deleteSuggestion(index)">
              <md-icon class="md-primary">delete</md-icon>
            </md-button>

          </md-list-item>

        </md-list>
      </div>
    </div>

  </div>

</template>

<script lang="ts" src="./FoodChoice.ts"></script>

<style scoped lang="scss" src="./FoodChoice.scss"></style>
