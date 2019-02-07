<template>
  <div>
    <div
      v-for="category in categories"
      :key="category.id"
    >
      <h1 class="text-md-center">
        {{ category.name }}
      </h1>
      <v-divider />
      <v-container
        fluid
        grid-list-sm
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            v-for="movie in movies"
            :key="movie.id"
            xs5
            sm3
            md2
          >
            <movie-card :movie="movie" />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';
import Api from '../modules/masaApi';


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
    categories: [],
  }),
  mounted() {
    this.fetchData();
    this.fetchCategories();
  },
  methods: {
    fetchData() {
      const requests = [];
      for (let i = 0; i < this.movieIds.length; i++) {
        const url = `https://api.themoviedb.org/3/movie/${this.movieIds[i]}?api_key=${process.env.VUE_APP_TMDB_API_KEY}&language=de-DE)`;
        requests.push(axios.get(url, { withCredentials: false }));
      }

      axios.all(requests)
        .then((results) => {
          this.movies = results.map(r => r.data);
        }).catch((error) => {
          console.log(error);
        });
    },
    fetchCategories() {
      Api.getCategories().then((response) => {
        this.categories = response.data;
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>
