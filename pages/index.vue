<template>
  <v-main>
    <v-container class="grey lighten-5">
      <div class="text-center" style="padding-bottom:10px;">
        <v-btn
        x-small
          v-for="pageNumber in totalPages"
          :key="pageNumber.id"
          v-bind:keys="pageNumber"
          @click="setPage(pageNumber)"
          :class="{
            current: currentPage === pageNumber,
            last:
              pageNumber == totalPages &&
              Math.abs(pageNumber - currentPage) > 3,
            first: pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3
          }"
        >
          {{ pageNumber }}
        </v-btn>
         <p class="mt-3">Current Page: {{ currentPage }}</p>
      </div>
      <v-row no-gutters>
        <v-col v-for="article in paginate" :key="article._id" cols="12" sm="4">
          <div>
            <v-hover v-slot="{ hover }" open-delay="200">
              <nuxt-link :to="`/blog/${article.slug}`">
                <v-card
                  class="rounded-card mx-auto my-12"
                  min-height="320"
                  :elevation="hover ? 16 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <v-img
                    :src="`https://api.techblog369.in${article.image.url}`"
                    aspect-ratio="2.75"
                  />
                  <v-card-title class="text-overline mb-4">
                    {{ article.title }}
                  </v-card-title>
                  <div class="text-overline mb-4">
                    Published:{{ formatDate(article.published_at) }}
                  </div>
                </v-card>
              </nuxt-link>
            </v-hover>
          </div>
        </v-col>
      </v-row>
      <div class="text-center" style="padding-bottom:50px;">
        <v-btn
        x-small
          v-for="pageNumber in totalPages"
          :key="pageNumber.id"
          v-bind:keys="pageNumber"
          @click="setPage(pageNumber)"
          :class="{
            current: currentPage === pageNumber,
            last:
              pageNumber == totalPages &&
              Math.abs(pageNumber - currentPage) > 3,
            first: pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3
          }"
        >
          {{ pageNumber }}
        </v-btn>
         <p class="mt-3">Current Page: {{ currentPage }}</p>
      </div>
    </v-container>
  </v-main>
</template>
<script>
/*eslint-disable*/
export default {
  data() {
    return {
      articles: [],
      currentPage: 1,
      itemsPerPage: 9,
      resultCount: 0
    };
  },
    async fetch() {
    this.articles = await fetch(
      "https://api.techblog369.in/articles" + "?_sort=id:DESC"
    ).then(res => res.json());
  },
  methods: {
    setPage: function(pageNumber) {
      this.currentPage = pageNumber;
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  computed: {
    /* eslint-disable */
    totalPages: function() {
      if (this.resultCount == 0) {
        return 1;
      } else {
        return Math.ceil(this.resultCount / this.itemsPerPage);
      }
    },
    /* eslint-disable */
    paginate: function() {
      if (!this.articles || this.articles.length != this.articles.length) {
        return;
      }
      this.resultCount = this.articles.length;
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages;
      }
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
      return this.articles.slice(index, index + this.itemsPerPage);
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.v-btn {
  min-width: 0;
  border-radius: 28px !important;
}
.current {
  color: blue;
}
.rounded-card {
  border-radius: 24px;
  /* border: 2px solid rgb(155, 68, 53); */
  border: 1px solid #c9c9c9;
}
</style>
