<template>
  <v-container>
    <v-card
      v-for="(item, i) in posts"
      :key="i"
      class="mx-auto my-12"
      max-width="700"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            {{formatDate(item.published_at)}}
          </div>
          <v-list-item-title class="text-h5 mb-1">
            {{item.title}}
          </v-list-item-title>
          <v-list-item-subtitle
            >{{item.description}}</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"><v-img :src="`https://api.techblog369.in${item.image.url}`" /></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text>
          <nuxt-link :to="`/blog/${item.slug}`">Readmore</nuxt-link>
        </v-btn>
      </v-card-actions>
    </v-card>

    <infinite-loading
      v-if="posts.length"
      spinner="spiral"
      @infinite="infiniteScroll"
    ></infinite-loading>
  </v-container>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import InfiniteLoading from "vue-infinite-loading";
export default {
  name: "Post",
  data() {
    return {
      posts: [],
      page: 1
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
      formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    async fetchData() {
      const response = await axios.get("https://api.techblog369.in/articles" + "?_sort=id:DESC&_limit=6");
      this.posts = response.data;
    },
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++;
        axios
          .get("https://api.techblog369.in/articles" + "?_sort=id:DESC&_limit=3")
          .then(response => {
            if (response.data.length > 1) {
              response.data.forEach(item => this.posts.push(item));
              $state.loaded();
            } else {
              $state.complete();
            }
          })
          .catch(err => {
            console.log(err);
          });
      }, 1000);
    }
  },
  components: {
    InfiniteLoading
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>
