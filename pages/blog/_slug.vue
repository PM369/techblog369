<template>
  <v-container mt-4 style="padding-bottom:120px;">
    <v-row>
      <v-card>
        <div v-for="mountain of mountains" :key="mountain.id" pa-3>
          <v-img
            :src="`https://api.techblog369.in${mountain.image.url}`"
            aspect-ratio="2.75"
          />
          <!-- <p>{{ mountain.image.url }}</p> -->
          <v-card-title pa-3>{{ mountain.title }}</v-card-title>
          <v-card-text pa-3>{{ mountain.description }}</v-card-text>
          <p v-html="mountain.content" class="text-justify" style="padding:20px;" mb-40>
          </p>
          <br/>
          <div id="block_container">
            <div>
              <ShareNetwork
                network="facebook"
                :title="mountain.title"
                :url="url"
              >
                <v-icon class="facebook">mdi-facebook</v-icon>
                <!-- <span>Share on Facebook</span> -->
              </ShareNetwork>
            </div>
            <div>
              <ShareNetwork
                network="twitter"
                :title="mountain.title"
                :url="url"
              >
                <v-icon class="twitter">mdi-twitter</v-icon>
                <!-- <span>Share on Twitter</span> -->
              </ShareNetwork>
            </div>
            <div>
              <ShareNetwork network="reddit" :title="mountain.title" :url="url">
                <v-icon class="reddit">mdi-reddit</v-icon>
                <!-- <span>Share on Twitter</span> -->
              </ShareNetwork>
            </div>
            <div>
              <ShareNetwork
                network="whatsapp"
                :title="mountain.title"
                :url="url"
              >
                <v-icon class="whatsapp">mdi-whatsapp</v-icon>
                <!-- <span>Share on Twitter</span> -->
              </ShareNetwork>
            </div>
          </div>
        </div>
        <div id="fb"></div>

        <!-- <div v-html="getLink"></div> -->
        <!--  <div
          class="fb-comments"
          v-bind:data-href="getLink"
          data-width="550"
          data-numposts="5"
        ></div> -->
      </v-card>
      <!-- <div id="fb"></div> -->
    </v-row>
  </v-container>
</template>

<script>
/*eslint-disable*/
export default {
  data() {
    return {
      mountains: [],
      link: null,
      Tlink: null,
      api: process.env.apiLink,
      newsTitle: null,
      url: "https://techblog369.in" + this.$route.fullPath
    };
  },
  mounted() {
    if (!process.server) {
      var z = document.createElement("div");
      z.innerHTML =
        '<div class="fb-comments" data-href="' +
        window.location.href +
        '" data-width="500" data-numposts="5"></div>';
      document.getElementById("fb").appendChild(z);
      window.FB.XFBML.parse(document.getElementById("fb"));
    }
  },
  computed: {
    getLink: function() {
      let link = "https://techblog369.in" + this.$route.fullPath;
      return link;
    }
  },
  async asyncData({ params, $axios }) {
    const mountains = await $axios.$get(
      `https://api.techblog369.in/articles/?slug=${params.slug}`
    );
    return { mountains };
  },
  head() {
    let mountains = this.mountains;
    return {
      title: mountains[0].title,
      meta: [
        {
          hid: `description`,
          name: mountains[0].description,
          content: mountains[0].content
        }
      ],
      link: [{ rel: "canonical", href: "https://techblog369.in"+ this.$route.fullPath }]
    };
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.social {
  cursor: grab;
}
.social-media {
  border: 1px solid#000;
  padding: 2px;
  background: #fff;
}
.reddit {
  color: orange;
  font-size: 50px;
}
.facebook {
  color: #4267b2;
  font-size: 50px;
}
.twitter {
  color: #00acee;
  font-size: 50px;
}
.whatsapp {
  color: #25d366;
  font-size: 50px;
}
#block_container {
  display: flex;
  justify-content: center;
}
</style>
