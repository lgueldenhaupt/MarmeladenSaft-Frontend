<template>
  <v-card>
    <v-img
      :src="posterPath"
      :aspect-ratio="posterRatio"
    />

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">
          {{ movie.title }}
        </h3>
        <div>{{ movie.tagline }}</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn
        flat
        color="orange"
      >
        Miep
      </v-btn>
      <v-btn
        flat
        color="orange"
      >
        Möp
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    posterRatio: 2 / 3,
  }),
  computed: {
    posterPath() {
      return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    },
  },
};
</script>
