<template>
  <div>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="movie in movies"
          xs12
          sm5
          md3
        >
          <movie-card :movie="movie" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';

const axios = require('axios');

export default {
  components: {
    MovieCard,
  },
  data: () => ({
    movieIds: [
      277834,
      47166,
    ],
    movies: [],
  }),
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const requests = [];
      for (let i = 0; i < this.movieIds.length; i++) {
        const url = `https://api.themoviedb.org/3/movie/${this.movieIds[i]}?api_key=${process.env.VUE_APP_TMDB_API_KEY}&language=de-DE)`;
        requests.push(axios.get(url));
      }

      axios.all(requests)
        .then((results) => {
          this.movies = results.map(r => r.data);
        }).catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
