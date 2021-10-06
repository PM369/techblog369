<template>
  <v-app>
    <TheMenu />
    <TheSideNav />
    <nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    <section>
      <TheFooter />
    </section>
  </v-app>
</template>

<script>
/*eslint-disable*/
import TheMenu from '../components/TheMenu'
import TheSideNav from '~/components/TheSideNav'
import TheFooter from '../components/TheFooter'
export default {
  components: {
    TheMenu,
     TheSideNav,
    TheFooter
  },
  computed: {
    isSidebar () {
      return this.$store.getters['nav/toggleSidebar']
    }
  },

  watch: {
    $route () {
      if (process.client && this.isSidebar && window.innerWidth < 768) {
        this.$store.dispatch('nav/toggleSidebar')
      }
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
}
section {
  overflow-x: hidden;
}
img {
  width: 100%; /* slug page media libery image resposived */
}
blockquote {
  background-color: rgb(0, 0, 0);
  color: white;
  text-align: justify;
}
p{
  text-align: justify;
}
b, strong {
  text-align: justify;
}
</style>
