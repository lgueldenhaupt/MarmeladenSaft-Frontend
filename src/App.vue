<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer.open"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
    >
      <v-list
        dense
        class="pt-0"
      >
        <v-list-tile
          v-for="item in drawer.items"
          :key="item.title"
          :to="item.to"
          ripple
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      fixed
    >
      <v-toolbar-title class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer.open = !drawer.open" />
        <span class="hidden-sm-and-down">
          MarmeladenSaft
        </span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: {
        open: false,
        items: [
          { title: 'Oscars', icon: 'mdi-trophy', to: { name: 'oscars' } },
          { title: 'Food', icon: 'mdi-food-fork-drink', to: { name: 'food' } },
        ],
      },
    };
  },
};
</script>
