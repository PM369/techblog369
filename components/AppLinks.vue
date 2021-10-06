<template>
  <ul class="nav-list">
    <li class="nav-item">
      <nuxt-link to="/">
        Home
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/blog">
        Blog
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/news">
        News
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: #fefefe;
}
.nav-item a:hover,
.nav-item a:active {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(19,231,22,1) 39%, rgba(0,212,255,1) 100%);
  /* font-size: 20px; */
}

@media (max-width: 767px) {
  .nav-list {
    display: block;
  }
  .nav-item {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

@media (min-width: 768px) {
  .nav-list {
    display: flex;
  }
}
</style>
