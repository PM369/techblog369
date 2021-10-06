<template>
<v-container fluid>
  <div class="footer" style="margin-top:200px;">
    <span>Copyright © 2020-2021 techblog369.in</span>
     <nuxt-link to="/privacy-policy">Privacy Plolicy</nuxt-link>
      <nuxt-link to="/">Home</nuxt-link>
  </div>
  </v-container>
</template>
<script>
export default {}
</script>
<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
 background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(227,201,91,1) 39%, rgba(0,212,255,1) 100%);
  color: white;
  text-align: center;
}
.footer > a {
  color: aliceblue;
  text-decoration: none;
  padding: 10px;
}
</style>
